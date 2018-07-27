precision mediump float;

#pragma glslify: inverse = require(glsl-inverse)
#pragma glslify: getTubePosition = require(./tube-position.glsl)

attribute vec4 vector;
attribute vec4 color, position;
attribute vec2 uv;
uniform float tubeScale;

uniform mat4 model
           , view
           , projection;
uniform vec3 eyePosition
           , lightPosition;

varying vec3 f_normal
           , f_lightDirection
           , f_eyeDirection
           , f_data;
varying vec4 f_color;
varying vec2 f_uv;

void main() {
  // Scale the vector magnitude to stay constant with
  // model & view changes.
  vec3 normal;
  vec4 tubePosition = model * vec4(position.xyz, 1.0) + vec4(getTubePosition(mat3(model) * (tubeScale * vector.w * normalize(vector.xyz)), position.w, normal), 0.0);
  normal = normalize(normal * inverse(mat3(model)));

  vec4 t_position  = view * tubePosition;
  gl_Position      = projection * t_position;
  f_color          = color;
  f_normal         = normal;
  f_data           = tubePosition.xyz;
  f_eyeDirection   = eyePosition   - tubePosition.xyz;
  f_lightDirection = lightPosition - tubePosition.xyz;
  f_uv             = uv;
}
