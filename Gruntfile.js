module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        jshint: {
            options: {
                undef: true,
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true,
                shadow: true,
                jquery: true,
                couch: true,
                globals: {
                    "Handlebars": false,
                    "define": false,
                    "require": false,
                    "Backbone": false,
                    "Ink": false
                }
            },
            all: ['script/**/*.js']
        },
        requirejs: {
            all: {
                options: {
                    appDir: './',
                    baseUrl: './',
                    mainConfigFile: 'script/config.js',
                    name: 'config',
                    dir: 'build/',
                    optimize: 'uglify2',
                    //generateSourceMaps: true,
                    //Introduced in 2.1.2: If using "dir" for an output directory, normally the
                    //optimize setting is used to optimize the build bundles (the "modules"
                    //section of the config) and any other JS file in the directory. However, if
                    //the non-build bundle JS files will not be loaded after a build, you can
                    //skip the optimization of those files, to speed up builds. Set this value
                    //to true if you want to skip optimizing those other non-build bundle JS
                    //files.
                    skipDirOptimize: true,
                    inlineText: true,
                    stubModules: ['text']
                }
            }
        },
        jsbeautifier: {
            files: ['script/**/*.js', 'template/**/*.html'],
            options: {
                //config: "path/to/configFile",
                html: {
                    braceStyle: "collapse",
                    indentChar: " ",
                    indentScripts: "keep",
                    indentSize: 3,
                    maxPreserveNewlines: 10,
                    preserveNewlines: true,
                    unformatted: ["a", "sub", "sup", "b", "i", "u"],
                    wrapLineLength: 0
                },
                css: {
                    indentChar: " ",
                    indentSize: 3
                },
                js: {
                    braceStyle: "expand",
                    breakChainedMethods: false,
                    e4x: false,
                    evalCode: false,
                    indentChar: " ",
                    indentLevel: 0,
                    indentSize: 3,
                    indentWithTabs: false,
                    jslintHappy: false,
                    keepArrayIndentation: false,
                    keepFunctionIndentation: false,
                    maxPreserveNewlines: 10,
                    preserveNewlines: true,
                    spaceBeforeConditional: true,
                    spaceInParen: false,
                    unescapeStrings: false,
                    wrapLineLength: 0
                }
            }
        },
        less: {
           less: {
              files: {
                 "css/style.css": "less/style.less"
              }
           }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jsbeautifier');

    grunt.registerTask('default', ['jsbeautifier', 'jshint', 'less:less']);
    grunt.registerTask('build', ['jsbeautifier', 'jshint',  'less:less', 'requirejs:all']);
};
