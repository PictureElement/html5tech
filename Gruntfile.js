module.exports = function(grunt) {

  grunt.initConfig({
    
    clean: {
      task1: ['src/css/purestyles.css'],
      task2: ['dist/css/*.css']
    },

    purifycss: {
      options: {},
      target: {
        src: ['src/*.html', 'src/js/*.js', 'src/svg-with-js/js/*.js'],
        css: ['src/css/*.css', 'src/svg-with-js/css/fa-svg-with-js.css'],
        dest: 'src/css/purestyles.css'
      },
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'src/css/',
          src: ['purestyles.css', '!*.min.css'],
          dest: 'dist/css/',
          ext: '.min.css'
        }]
      }
    },

    uglify: {
      my_target: {
        files: {
          'dist/js/output.min.js': [
            'src/js/jquery.min.js', 
            'src/js/popper.min.js', 
            'src/js/bootstrap.min.js',
            'src/js/site.js',
            'src/js/run_prettify.js',
            'src/svg-with-js/js/fa-solid.js',
            'src/svg-with-js/js/fontawesome.js'
          ]
        }
      }
    },

    copy: {
      main: {
        expand: true,
        cwd: 'src/',
        src: '*.html',
        dest: 'dist/'
      }
    },
    
    critical: {
      t0: {
        options: {
          dimensions: [
            {
              width: 1920,
              height: 1080
            },
            {
              width: 500,
              height: 1080
            }
          ]
        },
        src: 'dist/js-classes.html',
        dest: 'dist/js-classes.html'
      },
      t1: {
        options: {
          dimensions: [
            {
              width: 1920,
              height: 1080
            },
            {
              width: 500,
              height: 1080
            }
          ]
        },
        src: 'dist/js-data-related.html',
        dest: 'dist/js-data-related.html'
      },
      t2: {
        options: {
          dimensions: [
            {
              width: 1920,
              height: 1080
            },
            {
              width: 500,
              height: 1080
            }
          ]
        },
        src: 'dist/js-dom.html',
        dest: 'dist/js-dom.html'
      },
      t3: {
        options: {
          dimensions: [
            {
              width: 1920,
              height: 1080
            },
            {
              width: 500,
              height: 1080
            }
          ]
        },
        src: 'dist/jquery-dom-manipulation.html',
        dest: 'dist/jquery-dom-manipulation.html'
      },
      t4: {
        options: {
          dimensions: [
            {
              width: 1920,
              height: 1080
            },
            {
              width: 500,
              height: 1080
            }
          ]
        },
        src: 'dist/js-expressions-and-operators.html',
        dest: 'dist/js-expressions-and-operators.html'
      },
      t5: {
        options: {
          dimensions: [
            {
              width: 1920,
              height: 1080
            },
            {
              width: 500,
              height: 1080
            }
          ]
        },
        src: 'dist/js-flow-control.html',
        dest: 'dist/js-flow-control.html'
      },
      t6: {
        options: {
          dimensions: [
            {
              width: 1920,
              height: 1080
            },
            {
              width: 500,
              height: 1080
            }
          ]
        },
        src: 'dist/js-function-related.html',
        dest: 'dist/js-function-related.html'
      },
      t7: {
        options: {
          dimensions: [
            {
              width: 1920,
              height: 1080
            },
            {
              width: 500,
              height: 1080
            }
          ]
        },
        src: 'dist/js-functions.html',
        dest: 'dist/js-functions.html'
      },
      t8: {
        options: {
          dimensions: [
            {
              width: 1920,
              height: 1080
            },
            {
              width: 500,
              height: 1080
            }
          ]
        },
        src: 'dist/index.html',
        dest: 'dist/index.html'
      },
      t9: {
        options: {
          dimensions: [
            {
              width: 1920,
              height: 1080
            },
            {
              width: 500,
              height: 1080
            }
          ]
        },
        src: 'dist/jquery-introduction.html',
        dest: 'dist/jquery-introduction.html'
      },
      t10: {
        options: {
          dimensions: [
            {
              width: 1920,
              height: 1080
            },
            {
              width: 500,
              height: 1080
            }
          ]
        },
        src: 'dist/js-object-related.html',
        dest: 'dist/js-object-related.html'
      },
      t11: {
        options: {
          dimensions: [
            {
              width: 1920,
              height: 1080
            },
            {
              width: 500,
              height: 1080
            }
          ]
        },
        src: 'dist/canvas-introduction.html',
        dest: 'dist/canvas-introduction.html'
      },
      t12: {
        options: {
          dimensions: [
            {
              width: 1920,
              height: 1080
            },
            {
              width: 500,
              height: 1080
            }
          ]
        },
        src: 'dist/canvas-animations.html',
        dest: 'dist/canvas-animations.html'
      },
      t13: {
        options: {
          dimensions: [
            {
              width: 1920,
              height: 1080
            },
            {
              width: 500,
              height: 1080
            }
          ]
        },
        src: 'dist/js-objects.html',
        dest: 'dist/js-objects.html'
      }
    },

    htmlmin: {                                    
      dist: {                                     
        options: {                                 
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'dist/js-classes.html': 'dist/js-classes.html',
          'dist/js-data-related.html': 'dist/js-data-related.html',
          'dist/js-dom.html': 'dist/js-dom.html',
          'dist/jquery-dom-manipulation.html': 'dist/jquery-dom-manipulation.html',
          'dist/js-expressions-and-operators.html': 'dist/js-expressions-and-operators.html',
          'dist/js-flow-control.html': 'dist/js-flow-control.html',
          'dist/js-function-related.html': 'dist/js-function-related.html',
          'dist/js-functions.html': 'dist/js-functions.html',
          'dist/index.html': 'dist/index.html',
          'dist/jquery-introduction.html': 'dist/jquery-introduction.html',
          'dist/js-object-related.html': 'dist/js-object-related.html',
          'dist/js-objects.html': 'dist/js-objects.html',
          'dist/canvas-introduction.html': 'dist/canvas-introduction.html',
          'dist/canvas-animations.html': 'dist/canvas-animations.html'
        }
      }
    }

  });

  // Load the grunt plugins
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-purifycss');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-critical');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  
  // Default task(s).
  //grunt.registerTask('default', ['clean']);
  //grunt.registerTask('default', ['purifycss']);
  //grunt.registerTask('default', ['cssmin']);
  grunt.registerTask('default', ['critical']);
  //grunt.registerTask('default', ['htmlmin']);
};
