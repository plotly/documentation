precision mediump float;

uniform vec3  clipBounds[2];
uniform float pickId;

varying vec3 f_position;
varying vec4 f_id;

void main() {
  if(any(lessThan(f_position, clipBounds[0])) || 
     any(greaterThan(f_position, clipBounds[1]))) {
    discard;
  }
  gl_FragColor = vec4(pickId, f_id.xyz);
}