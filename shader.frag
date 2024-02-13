
#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359
#define IT 20.0

uniform sampler2D u_tex0;
uniform vec2 u_tex0Resolution;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float dither8x8(vec2 position, float brightness) {  
  float limit = texture2D(u_tex0, position / u_tex0Resolution*0.04).r;
  return brightness < limit ? 0.0 : 1.0;
}

void main() {
    vec2 st = ((gl_FragCoord.xy * 2.0 - u_resolution.xy) / (u_resolution.y*2.))+.5;
    float pct = 0.0;
    vec2 coord = gl_FragCoord.xy;

    pct = pow(distance(st,vec2(sin(u_time)*.5+.5)), distance(st,vec2(0.420,0.700)));
    pct = smoothstep((sin(u_time*.6)*.38+.5), 0.90, pct);

    vec3 col = vec3(dither8x8(gl_FragCoord.xy, pct))*vec3(0.929,0.91,0.871);

    gl_FragColor = vec4(col,1.0);
}