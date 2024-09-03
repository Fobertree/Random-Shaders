#ifdef GL_ES
precision mediump float;
#endif

#define TWO_PI 6.28318530718

uniform vec2 u_resolution;
uniform float u_time;

void main()
{
    vec3 color = vec3(0.4745, 0.0627, 0.0627);
    vec2 st = gl_FragCoord.xy / u_resolution;

    //color.r = abs(sin(u_time / TWO_PI)) / (st.x * abs(0.5-st.y));
    color.r = sin(u_time);
    color.g = abs(cos(u_time * 0.5)) + st.x;
    color.b = smoothstep(0.0, abs(cos(u_time * 0.5)) / (st.y), st.y);

    gl_FragColor = vec4(color,1.0);
}