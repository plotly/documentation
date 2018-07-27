precision mediump float;

attribute vec4 uv;
attribute float f;

uniform mat3 permutation;
uniform mat4 model, view, projection;
uniform float height, zOffset;
uniform sampler2D colormap;

varying float value, kill;
varying vec3 worldCoordinate;
varying vec2 planeCoordinate;
varying vec3 lightDirection, eyeDirection, surfaceNormal;
varying vec4 vColor;

void main() {
  vec3 dataCoordinate = permutation * vec3(uv.xy, height);
  vec4 worldPosition = model * vec4(dataCoordinate, 1.0);

  vec4 clipPosition = projection * view * worldPosition;
  clipPosition.z = clipPosition.z + zOffset;

  gl_Position = clipPosition;
  value = f;
  kill = -1.0;
  worldCoordinate = dataCoordinate;
  planeCoordinate = uv.zw;

  vColor = texture2D(colormap, vec2(value, value));

  //Don't do lighting for contours
  surfaceNormal   = vec3(1,0,0);
  eyeDirection    = vec3(0,1,0);
  lightDirection  = vec3(0,0,1);
}
