precision mediump float;

uniform vec3  clipBounds[2];
uniform float pickId;

varying vec3 f_position;
varying vec4 f_id;

void main() {
  gl_FragColor = vec4(pickId, f_id.xyz);
}