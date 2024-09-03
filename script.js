var canvas = document.querySelector("canvas")
var sandbox = new GlslCanvas(canvas)

// Load only the Fragment Shader
var string_frag_code = "main(){\ngl_FragColor = vec4(1.0);\n}\n";
sandbox.load(string_frag_code);