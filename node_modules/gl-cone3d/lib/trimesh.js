'use strict'

var DEFAULT_VERTEX_NORMALS_EPSILON = 1e-6; // may be too large if triangles are very small
var DEFAULT_FACE_NORMALS_EPSILON = 1e-6;

var createShader  = require('gl-shader')
var createBuffer  = require('gl-buffer')
var createVAO     = require('gl-vao')
var createTexture = require('gl-texture2d')
var normals       = require('normals')
var multiply      = require('gl-mat4/multiply')
var invert        = require('gl-mat4/invert')
var ndarray       = require('ndarray')
var colormap      = require('colormap')
var getContour    = require('simplicial-complex-contour')
var pool          = require('typedarray-pool')
var shaders       = require('./shaders')
var closestPoint  = require('./closest-point')

var meshShader    = shaders.meshShader
var wireShader    = shaders.wireShader
var pointShader   = shaders.pointShader
var pickShader    = shaders.pickShader
var pointPickShader = shaders.pointPickShader
var contourShader = shaders.contourShader

var identityMatrix = [
  1,0,0,0,
  0,1,0,0,
  0,0,1,0,
  0,0,0,1]

function SimplicialMesh(gl
  , texture
  , triShader
  , lineShader
  , pointShader
  , pickShader
  , pointPickShader
  , contourShader
  , trianglePositions
  , triangleIds
  , triangleColors
  , triangleUVs
  , triangleNormals
  , triangleVectors
  , triangleVAO
  , edgePositions
  , edgeIds
  , edgeColors
  , edgeUVs
  , edgeVAO
  , pointPositions
  , pointIds
  , pointColors
  , pointUVs
  , pointSizes
  , pointVAO
  , contourPositions
  , contourVAO) {

  this.gl                = gl
  this.positions         = []
  this.intensity         = []
  this.texture           = texture
  this.dirty             = true

  this.triShader         = triShader
  this.pickShader        = pickShader

  this.trianglePositions = trianglePositions
  this.triangleVectors   = triangleVectors
  this.triangleNormals   = triangleNormals
  this.triangleUVs       = triangleUVs
  this.triangleIds       = triangleIds
  this.triangleVAO       = triangleVAO
  this.triangleCount     = 0

  this.pickId            = 1
  this.bounds            = [
    [ Infinity, Infinity, Infinity],
    [-Infinity,-Infinity,-Infinity] ]
  this.clipBounds        = [
    [-Infinity,-Infinity,-Infinity],
    [ Infinity, Infinity, Infinity] ]

  this.lightPosition = [1e5, 1e5, 0]
  this.ambientLight  = 0.8
  this.diffuseLight  = 0.8
  this.specularLight = 2.0
  this.roughness     = 0.5
  this.fresnel       = 1.5

  this.opacity       = 1.0

  this._model       = identityMatrix
  this._view        = identityMatrix
  this._projection  = identityMatrix
  this._resolution  = [1,1]
}

var proto = SimplicialMesh.prototype

proto.isOpaque = function() {
  return this.opacity >= 1
}

proto.isTransparent = function() {
  return this.opacity < 1
}

proto.pickSlots = 1

proto.setPickBase = function(id) {
  this.pickId = id
}

function genColormap(param) {
  var colors = colormap({
      colormap: param
    , nshades:  256
    , format:  'rgba'
  })

  var result = new Uint8Array(256*4)
  for(var i=0; i<256; ++i) {
    var c = colors[i]
    for(var j=0; j<3; ++j) {
      result[4*i+j] = c[j]
    }
    result[4*i+3] = c[3]*255
  }

  return ndarray(result, [256,256,4], [4,0,1])
}

function takeZComponent(array) {
  var result = new Float32Array(array.length/3)
  for(var i=2, j=0; i<array.length; i+=3, j++) {
    result[j] = array[i]
  }
  return result
}

proto.highlight = function(selection) {
  if(!selection || !this.contourEnable) {
    this.contourCount = 0
    return
  }
  var level = getContour(this.cells, this.intensity, selection.intensity)
  var cells         = level.cells
  var vertexIds     = level.vertexIds
  var vertexWeights = level.vertexWeights
  var numCells = cells.length
  var result = pool.mallocFloat32(2 * 3 * numCells)
  var ptr = 0
  for(var i=0; i<numCells; ++i) {
    var c = cells[i]
    for(var j=0; j<2; ++j) {
      var v = c[0]
      if(c.length === 2) {
        v = c[j]
      }
      var a = vertexIds[v][0]
      var b = vertexIds[v][1]
      var w = vertexWeights[v]
      var wi = 1.0 - w
      var pa = this.positions[a]
      var pb = this.positions[b]
      for(var k=0; k<3; ++k) {
        result[ptr++] = w * pa[k] + wi * pb[k]
      }
    }
  }
  this.contourCount = (ptr / 3)|0
  this.contourPositions.update(result.subarray(0, ptr))
  pool.free(result)
}

proto.update = function(params) {
  params = params || {}
  var gl = this.gl

  this.dirty = true

  if('lightPosition' in params) {
    this.lightPosition = params.lightPosition
  }
  if('opacity' in params) {
    this.opacity = params.opacity
  }
  if('ambient' in params) {
    this.ambientLight  = params.ambient
  }
  if('diffuse' in params) {
    this.diffuseLight = params.diffuse
  }
  if('specular' in params) {
    this.specularLight = params.specular
  }
  if('roughness' in params) {
    this.roughness = params.roughness
  }
  if('fresnel' in params) {
    this.fresnel = params.fresnel
  }

  if(params.texture) {
    this.texture.dispose()
    this.texture = createTexture(gl, params.texture)
  } else if (params.colormap) {
    this.texture.shape = [256,256]
    this.texture.minFilter = gl.LINEAR_MIPMAP_LINEAR
    this.texture.magFilter = gl.LINEAR
    this.texture.setPixels(genColormap(params.colormap))
    this.texture.generateMipmap()
  }

  // var cells = params.cells
  var positions = params.positions

  if(!positions) {
    return
  }

  //Save geometry data for picking calculations
  this.positions = positions

  // Vectors for the vectorfield
  var vectors = params.vectors

  //Compute normals
  var vertexNormals = params.vertexNormals

  //UVs
  var vertexIntensity = params.vertexIntensity

  var intensityLo     = Infinity
  var intensityHi     = -Infinity
  if(vertexIntensity) {
    if(params.vertexIntensityBounds) {
      intensityLo = +params.vertexIntensityBounds[0]
      intensityHi = +params.vertexIntensityBounds[1]
    } else {
      for(var i=0; i<vertexIntensity.length; ++i) {
        var f = vertexIntensity[i]
        intensityLo = Math.min(intensityLo, f)
        intensityHi = Math.max(intensityHi, f)
      }
    }
  } else {
    for(var i=2; i<positions.length; i+=4) {
      var f = positions[i]
      intensityLo = Math.min(intensityLo, f)
      intensityHi = Math.max(intensityHi, f)
    }
  }


  if(vertexIntensity) {
    this.intensity = vertexIntensity
  } else {
    this.intensity = takeZComponent(positions)
  }

  //Pack cells into buffers
  var vertexCount = positions.length / 4;
  var triangleCount = vertexCount / 3;
  var tIds = new Uint32Array(vertexCount);
  var tUVs = new Float32Array(vertexCount * 2);

  for(var i=0,j=0; i<vertexCount; i++,j+=2) {
    tUVs[j] = (this.intensity[i] - intensityLo) / (intensityHi - intensityLo);
    tIds[i] = (i/3) | 0;
  }

  this.triangleCount  = triangleCount

  this.trianglePositions.update(positions)
  this.triangleVectors.update(vectors)
  this.triangleUVs.update(tUVs)
  this.triangleNormals.update(vertexNormals)
  this.triangleIds.update(tIds)
}

proto.drawTransparent = 
proto.draw = 
function(params) {
  params = params || {}
  var gl          = this.gl
  var model       = params.model      || identityMatrix
  var view        = params.view       || identityMatrix
  var projection  = params.projection || identityMatrix

  var clipBounds = [[-1e6,-1e6,-1e6],[1e6,1e6,1e6]]
  for(var i=0; i<3; ++i) {
    clipBounds[0][i] = Math.max(clipBounds[0][i], this.clipBounds[0][i])
    clipBounds[1][i] = Math.min(clipBounds[1][i], this.clipBounds[1][i])
  }

  var uniforms = {
    model:      model,
    view:       view,
    projection: projection,

    clipBounds: clipBounds,

    kambient:   this.ambientLight,
    kdiffuse:   this.diffuseLight,
    kspecular:  this.specularLight,
    roughness:  this.roughness,
    fresnel:    this.fresnel,

    eyePosition:   [0,0,0],
    lightPosition: [0,0,0],

    opacity:  this.opacity,

    contourColor: this.contourColor,

    texture:    0
  }

  this.texture.bind(0)

  var invCameraMatrix = new Array(16)
  multiply(invCameraMatrix, uniforms.view, uniforms.model)
  multiply(invCameraMatrix, uniforms.projection, invCameraMatrix)
  invert(invCameraMatrix, invCameraMatrix)

  for(var i=0; i<3; ++i) {
    uniforms.eyePosition[i] = invCameraMatrix[12+i] / invCameraMatrix[15]
  }

  var w = invCameraMatrix[15]
  for(var i=0; i<3; ++i) {
    w += this.lightPosition[i] * invCameraMatrix[4*i+3]
  }
  for(var i=0; i<3; ++i) {
    var s = invCameraMatrix[12+i]
    for(var j=0; j<3; ++j) {
      s += invCameraMatrix[4*j+i] * this.lightPosition[j]
    }
    uniforms.lightPosition[i] = s / w
  }

  if(this.triangleCount > 0) {
    var shader = this.triShader
    shader.bind()
    shader.uniforms = uniforms

    this.triangleVAO.bind()
    gl.drawArrays(gl.TRIANGLES, 0, this.triangleCount*3)
    this.triangleVAO.unbind()
  }
}

proto.drawPick = function(params) {
  params = params || {}

  var gl         = this.gl

  var model      = params.model      || identityMatrix
  var view       = params.view       || identityMatrix
  var projection = params.projection || identityMatrix

  var clipBounds = [[-1e6,-1e6,-1e6],[1e6,1e6,1e6]]
  for(var i=0; i<3; ++i) {
    clipBounds[0][i] = Math.max(clipBounds[0][i], this.clipBounds[0][i])
    clipBounds[1][i] = Math.min(clipBounds[1][i], this.clipBounds[1][i])
  }

  //Save camera parameters
  this._model      = [].slice.call(model)
  this._view       = [].slice.call(view)
  this._projection = [].slice.call(projection)
  this._resolution = [gl.drawingBufferWidth, gl.drawingBufferHeight]

  var uniforms = {
    model:      model,
    view:       view,
    projection: projection,
    clipBounds: clipBounds,
    pickId:     this.pickId / 255.0,
  }

  var shader = this.pickShader
  shader.bind()
  shader.uniforms = uniforms

  if(this.triangleCount > 0) {
    this.triangleVAO.bind()
    gl.drawArrays(gl.TRIANGLES, 0, this.triangleCount*3)
    this.triangleVAO.unbind()
  }
}


proto.pick = function(pickData) {
  if(!pickData) {
    return null
  }
  if(pickData.id !== this.pickId) {
    return null
  }

  var cellId    = pickData.value[0] + 256*pickData.value[1] + 65536*pickData.value[2]
  var cell      = [cellId*3+0, cellId*3+1, cellId*3+2]
  var positions = this.positions

  var simplex   = new Array(cell.length)
  for(var i=0; i<cell.length; ++i) {
    simplex[i] = [
      positions[cell[i]*4 + 0],
      positions[cell[i]*4 + 1],
      positions[cell[i]*4 + 2]
    ];
  }

  var data = closestPoint(
    simplex,
    [pickData.coord[0], this._resolution[1]-pickData.coord[1]],
    this._model,
    this._view,
    this._projection,
    this._resolution)

  if(!data) {
    return null
  }

  var weights = data[2]
  var interpIntensity = 0.0
  for(var i=0; i<cell.length; ++i) {
    interpIntensity += weights[i] * this.intensity[cell[i]]
  }

  return {
    position: data[1],
    index:    cell[data[0]],
    cell:     cell,
    cellId:   cellId,
    intensity:  interpIntensity,
    dataCoordinate: [
      this.positions[cell[data[0]]*4 + 0],
      this.positions[cell[data[0]]*4 + 1],
      this.positions[cell[data[0]]*4 + 2]
    ]
  }
}


proto.dispose = function() {
  this.texture.dispose()

  this.triShader.dispose()
  this.pickShader.dispose()

  this.triangleVAO.dispose()
  this.trianglePositions.dispose()
  this.triangleUVs.dispose()
  this.triangleNormals.dispose()
  this.triangleIds.dispose()
}

function createMeshShader(gl) {
  var shader = createShader(gl, meshShader.vertex, meshShader.fragment)
  shader.attributes.position.location = 0
  shader.attributes.uv.location       = 2
  shader.attributes.normal.location   = 3
  return shader
}

function createPickShader(gl) {
  var shader = createShader(gl, pickShader.vertex, pickShader.fragment)
  shader.attributes.position.location = 0
  shader.attributes.id.location       = 1
  return shader
}

function createSimplicialMesh(gl, params) {
  if (arguments.length === 1) {
    params = gl;
    gl = params.gl;
  }

  console.time("createSimplicialMesh init");

  var triShader       = createMeshShader(gl)
  var pickShader      = createPickShader(gl)

  var meshTexture       = createTexture(gl,
    ndarray(new Uint8Array([255,255,255,255]), [1,1,4]))
  meshTexture.generateMipmap()
  meshTexture.minFilter = gl.LINEAR_MIPMAP_LINEAR
  meshTexture.magFilter = gl.LINEAR

  var trianglePositions = createBuffer(gl)
  var triangleUVs       = createBuffer(gl)
  var triangleNormals   = createBuffer(gl)
  var triangleIds       = createBuffer(gl)
  var triangleVAO       = createVAO(gl, [
    { buffer: trianglePositions,
      type: gl.FLOAT,
      size: 4
    },
    { buffer: triangleIds,
      type: gl.UNSIGNED_BYTE,
      size: 4,
      normalized: true
    },
    { buffer: triangleUVs,
      type: gl.FLOAT,
      size: 2
    },
    { buffer: triangleNormals,
      type: gl.FLOAT,
      size: 3
    },
    { buffer: triangleVectors,
      type: gl.FLOAT,
      size: 3
    }
  ])

  console.timeEnd("createSimplicialMesh init");
  console.time("new SimplicialMesh");

  var mesh = new SimplicialMesh(gl
    , meshTexture
    , triShader
    , null
    , null
    , pickShader
    , null
    , null
    , trianglePositions
    , triangleIds
    , null
    , triangleUVs
    , triangleNormals
    , triangleVectors
    , triangleVAO
    , null
    , null
    , null
    , null
    , null
    , null
    , null
    , null
    , null
    , null
    , null
    , null
    , null)

  console.timeEnd("new SimplicialMesh");
  console.time("mesh.update");
  mesh.update(params)
  console.timeEnd("mesh.update");

  return mesh
}

module.exports = createSimplicialMesh
