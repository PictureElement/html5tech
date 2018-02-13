module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    
    clean: {
      task1: ['src/css/purestyles.css'],
      task2: ['dist/css/*.css']
    },

    purifycss: {
      options: {},
      target: {
        src: ['src/*.html', 'src/js/*.js', 'src/svg-with-js/js/fontawesome-all.min.js'],
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
          'dist/js/output.min.js': ['src/js/*.js', 'src/svg-with-js/js/fa-solid.js']
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
      t1: {
        options: {
          base: './',
          dimensions: [
            {
              width: 1300,
              height: 900
            },
            {
              width: 500,
              height: 900
            }
          ]
        },
        src: 'dist/classes.html',
        dest: 'dist/classes.html'
      },
      t2: {
        options: {
          base: './',
          dimensions: [
            {
              width: 1300,
              height: 900
            },
            {
              width: 500,
              height: 900
            }
          ]
        },
        src: 'dist/data-related.html',
        dest: 'dist/data-related.html'
      },
      t3: {
        options: {
          base: './',
          dimensions: [
            {
              width: 1300,
              height: 900
            },
            {
              width: 500,
              height: 900
            }
          ]
        },
        src: 'dist/dom.html',
        dest: 'dist/dom.html'
      },
      t4: {
        options: {
          base: './',
          dimensions: [
            {
              width: 1300,
              height: 900
            },
            {
              width: 500,
              height: 900
            }
          ]
        },
        src: 'dist/dom-manipulation.html',
        dest: 'dist/dom-manipulation.html'
      },
      t5: {
        options: {
          base: './',
          dimensions: [
            {
              width: 1300,
              height: 900
            },
            {
              width: 500,
              height: 900
            }
          ]
        },
        src: 'dist/expressions-and-operators.html',
        dest: 'dist/expressions-and-operators.html'
      },
      t6: {
        options: {
          base: './',
          dimensions: [
            {
              width: 1300,
              height: 900
            },
            {
              width: 500,
              height: 900
            }
          ]
        },
        src: 'dist/flow-control.html',
        dest: 'dist/flow-control.html'
      },
      t7: {
        options: {
          base: './',
          dimensions: [
            {
              width: 1300,
              height: 900
            },
            {
              width: 500,
              height: 900
            }
          ]
        },
        src: 'dist/function-related.html',
        dest: 'dist/function-related.html'
      },
      t8: {
        options: {
          base: './',
          dimensions: [
            {
              width: 1300,
              height: 900
            },
            {
              width: 500,
              height: 900
            }
          ]
        },
        src: 'dist/functions.html',
        dest: 'dist/functions.html'
      },
      t9: {
        options: {
          base: './',
          dimensions: [
            {
              width: 1300,
              height: 900
            },
            {
              width: 500,
              height: 900
            }
          ]
        },
        src: 'dist/index.html',
        dest: 'dist/index.html'
      },
      t10: {
        options: {
          base: './',
          dimensions: [
            {
              width: 1300,
              height: 900
            },
            {
              width: 500,
              height: 900
            }
          ]
        },
        src: 'dist/introduction.html',
        dest: 'dist/introduction.html'
      },
      t11: {
        options: {
          base: './',
          dimensions: [
            {
              width: 1300,
              height: 900
            },
            {
              width: 500,
              height: 900
            }
          ]
        },
        src: 'dist/object-related.html',
        dest: 'dist/object-related.html'
      },
      t12: {
        options: {
          base: './',
          dimensions: [
            {
              width: 1300,
              height: 900
            },
            {
              width: 500,
              height: 900
            }
          ]
        },
        src: 'dist/objects.html',
        dest: 'dist/objects.html'
      }
    },

    htmlmin: {                                    
      dist: {                                     
        options: {                                 
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'dist/classes.html': 'dist/classes.html', // 'destination': 'source' 
          'dist/data-related.html': 'dist/data-related.html',
          'dist/dom.html': 'dist/dom.html',
          'dist/dom-manipulation.html': 'dist/dom-manipulation.html',
          'dist/expressions-and-operators.html': 'dist/expressions-and-operators.html',
          'dist/flow-control.html': 'dist/flow-control.html',
          'dist/function-related.html': 'dist/function-related.html',
          'dist/functions.html': 'dist/functions.html',
          'dist/index.html': 'dist/index.html',
          'dist/introduction.html': 'dist/introduction.html',
          'dist/object-related.html': 'dist/object-related.html',
          'dist/objects.html': 'dist/objects.html'
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
