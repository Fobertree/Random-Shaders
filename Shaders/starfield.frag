#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

void main()
{
    vec2 st = (gl_FragCoord.xy - .5 * u_resolution.xy) / u_resolution.y;

    vec3 col = vec3(0);

    float d = length(st);
    float m = .02/d;

    col += m;

    float rays = max(0.0, 1. -abs(st.x * st.y*5000.));
    col += rays;

    gl_FragColor = vec4(col, 1.0);
}