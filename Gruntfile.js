'use strict';
module.exports = function(grunt) {
    require('time-grunt')(grunt); 
    require('jit-grunt')(grunt);
    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    'css/style.css': 'css/style.scss'
                }
            }
        }, 
        watch: {
            files: 'css/*.scss',
            tasks: ['sass']
        }, 
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'css/*.css',
                        '*.html',
                        'js/*.js'
                    ]
                }, 
                options: {
                    watchTask: true, 
                    server: {
                        baseeDir: './'
                    }
                }
            }
        }
    });
    grunt.registerTask('css',['sass']);
    grunt.registerTask('default',['browserSync', 'watch']);
}