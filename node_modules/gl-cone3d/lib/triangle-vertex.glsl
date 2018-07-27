precision mediump float;

#pragma glslify: inverse = require(glsl-inverse)
#pragma glslify: getConePosition = require(./cone-position.glsl)

attribute vec3 vector;
attribute vec4 color, position;
attribute vec2 uv;
uniform float vectorScale;
uniform float coneScale;

uniform float coneOffset;

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
  vec4 conePosition = model * vec4(position.xyz, 1.0) + vec4(getConePosition(mat3(model) * ((vectorScale * coneScale) * vector), position.w, coneOffset, normal), 0.0);
  normal = normalize(normal * inverse(mat3(model)));

  // vec4 m_position  = model * vec4(conePosition, 1.0);
  vec4 t_position  = view * conePosition;
  gl_Position      = projection * t_position;
  f_color          = color; //vec4(position.w, color.r, 0, 0);
  f_normal         = normal;
  f_data           = conePosition.xyz;
  f_eyeDirection   = eyePosition   - conePosition.xyz;
  f_lightDirection = lightPosition - conePosition.xyz;
  f_uv             = uv;
}
