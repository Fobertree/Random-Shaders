// Author @patriciogv - 2015
// http://patriciogonzalezvivo.com

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

/*
These lines transform cartesian to polar

vec2 pos = vec2(0.5)-st; // <- -0.5 to 0.5
float r = length(pos)*2.0; // euclidean distance from (0,0) to (x,y)
float a = atan(pos.y,pos.x); // compute angle

*/
void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(0.0);

    vec2 pos = vec2(0.5)-st;

    float r = length(pos)*2.0;
    float a = atan(pos.y,pos.x);

    float f = cos(a*7.);
    f = clamp((cos(a * u_time) + 1.) / 2.0, 0., 1.);
    f = abs(cos(a*3.));
    f = abs(cos(a*2.5))*.5+.3;
    f = abs(cos(a*12.)*sin(a*3.  - u_time))*.8+.1;
    //f = smoothstep(-.5,1., cos(a*10.))*0.2+0.5;

    color = vec3( 1.-smoothstep(f,f+0.02,r) );
    color.r *= st.s;
    color.g *= st.t;

    gl_FragColor = vec4(color, 1.0);
}
