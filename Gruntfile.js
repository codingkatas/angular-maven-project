'use strict';

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-protractor-runner');

    grunt.initConfig({
        yeoman: {
            // configurable paths
            app: require('./bower.json').appPath || 'app',
            dist: 'target/dist'
        },
        watch: {
            js: {
                files: ['<%= yeoman.app %>/scripts/**/*.js'],
                tasks: ['newer:jshint:all']
            },
            jsTest: {
                files: ['src/test/webapp/scripts/{,*/}*.js'],
                tasks: ['newer:jshint:test', 'karma']
            },
            styles: {
                files: ['<%= yeoman.app %>/styles/{,*/}.css'],
                tasks: ['newer:copy:styles', 'autoprefixer']
            },
            gruntfile: {
                files: ['Gruntfile.js']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= yeoman.app %>/index.html',
                    '<%= yeoman.app %>/styles/{,*/}*.css',
                    '<%= yeoman.app %>/scripts/{,*/}*.js',
                    '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },
        // The actual grunt server settings
        connect: {
            options: {
                port: 9000,
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: 'localhost',
                livereload: 35729
            },
            livereload: {
                options: {
                    open: true,
                    base: [
                        '<%= yeoman.app %>'
                    ]
                }
            },
            test: {
                options: {
                    port: 9001,
                    base: [
                        'test',
                        '<%= yeoman.app %>'
                    ]
                }
            },
            dist: {
                options: {
                    base: '<%= yeoman.dist %>'
                }
            }
        },
        protractor: {
            options: {
                keepAlive: false, // If false, the grunt process stops when the test fails.
                noColor: false, // If true, protractor will not use colors in its output.
                args: {
                    // Arguments passed to the command
                }
            },
            e2e: {
                configFile: 'src/test/e2e/e2e.conf.js'
            }
        },
        // Make sure code styles are up to par and there are no obvious mistakes
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                '<%= yeoman.app %>/scripts/**/*.js'
            ],
            test: {
                options: {
                    jshintrc: 'src/test/.jshintrc'
                },
                src: ['test/spec/**/*.js']
            }
        },

        karma: {
            options: {
                frameworks: ['jasmine'],
                files: [
                    'src/main/webapp/lib/sugar-1.3.9.min.js',
                    'src/main/webapp/lib/jquery-2.0.3.min.js',
                    'src/main/webapp/lib/angular-1.2.5/angular.min.js',
                    'src/main/webapp/lib/angular-1.2.5/angular-mocks.js',
                    'src/main/webapp/lib/angular-1.2.5/angular-resource.min.js',
                    'src/main/webapp/lib/angular-1.2.5/angular-route.min.js',
                    'src/main/webapp/lib/ui-bootstrap-tpls-0.5.0.min.js',
                    'src/main/webapp/scripts/codingkatas/util.js',
                    'src/main/webapp/scripts/codingkatas/app.js',
                    'src/main/webapp/scripts/codingkatas/services/RememberListService.js',
                    'src/main/webapp/scripts/codingkatas/controllers/HomeCtrl.js',
                    'src/test/webapp/scripts/**/*.js'
                ],
                reporters: ['progress'],
                port: 9876,
                browsers: ['PhantomJS'],
                singleRun: true,
                plugins: [
                    'karma-jasmine',
                    'karma-phantomjs-launcher'
                ]
            },
            ci: {
                autoWatch: false
            },
            dev: {
                autoWatch: false
            }
        }
    });

    grunt.registerTask('server', function () {

        grunt.task.run([
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('default', ['jshint']);

};