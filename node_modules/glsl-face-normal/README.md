# glsl-face-normal

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

![demo-image](http://i.imgur.com/PFaEL8y.png)

[(click for demo)](http://stack.gl/glsl-face-normal/demo)

<!-- iframe: http://stack.gl/glsl-face-normal/demo -->

Approximates face normals in the fragment shader for flat shading from the position in camera space.

*Note:* You need to enable `GL_OES_standard_derivatives`.

Fragment:

```glsl
#extension GL_OES_standard_derivatives : enable
varying vec3 vViewPos;

#pragma glslify: faceNormal = require('glsl-face-normal')

void main() {
  vec3 normal = faceNormal(vViewPos);
  //... lighting
}
```

Vertex: 

```glsl
varying vec3 vViewPos;

void main() {
  vec4 pos = vec4(position, 1.0);
  vec4 mpos = modelViewMatrix * pos;
  gl_Position = projectionMatrix * mpos;
  vViewPos = -mpos.xyz;
}
```

## Usage

[![NPM](https://nodei.co/npm/glsl-face-normal.png)](https://nodei.co/npm/glsl-face-normal/)

#### `vec3 normal = faceNormal(vec3 pos)`

Approximates the face `normal` from the given `pos`, which is typically the position in camera-space.

For better precision, you can use the [eye relative position](http://www.enkisoftware.com/devlogpost-20150131-1-Normal_generation_in_the_pixel_shader.html) instead.

## License

MIT. See [LICENSE.md](http://github.com/stackgl/glsl-face-normal/blob/master/LICENSE.md) for details.
