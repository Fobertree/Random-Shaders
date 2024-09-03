
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;

    float x = clamp(step(0.2, st.x) + (0.6 - step(0.8, st.x)),0.0, 1.0);
    float y = clamp(step(0.2, st.y) + (0.6 - step(0.8, st.y)),0.0, 1.0);
    vec3 color = vec3(clamp(x*y,0.0,1.0), 0.0, 0.0);

    gl_FragColor = vec4(color, 1.0);

}