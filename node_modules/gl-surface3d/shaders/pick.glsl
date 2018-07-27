precision mediump float;

uniform vec2 shape;
uniform vec3 clipBounds[2];
uniform float pickId;

varying float value, kill;
varying vec3 worldCoordinate;
varying vec2 planeCoordinate;
varying vec3 surfaceNormal;

vec2 splitFloat(float v) {
  float vh = 255.0 * v;
  float upper = floor(vh);
  float lower = fract(vh);
  return vec2(upper / 255.0, floor(lower * 16.0) / 16.0);
}

void main() {
  if(kill > 0.0 ||
    any(lessThan(worldCoordinate, clipBounds[0])) || any(greaterThan(worldCoordinate, clipBounds[1]))) {
    discard;
  }
  vec2 ux = splitFloat(planeCoordinate.x / shape.x);
  vec2 uy = splitFloat(planeCoordinate.y / shape.y);
  gl_FragColor = vec4(pickId, ux.x, uy.x, ux.y + (uy.y/16.0));
}
