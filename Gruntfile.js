module.exports = function( grunt ) {

  "use strict"

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    watch: {

      html: {
        files: ['source/markup/*.html','source/markup/**/*.html'],
        tasks: ['jade:compile','includes','clean']
      },

      json: {
        files: ['config.json'],
        tasks: ['build']
      },

      jd: {
        files: ['_files/*.jade','_files/**/*.jade','source/markup/all.jade','source/markup/**/*.jade'],
        tasks: ['jade:compile','includes']
      },

      styl: {
        files: ['_files/*.styl','source/**/*.styl'],
        tasks: ['stylus:compile','stylus:compress']
      },

      javascript: {
        files: '_files/*.js',
        tasks: ['uglify']
      },

      img: {
        files: ['_files/images/*.{png,jpg,gif}'],
        tasks: ['newer:imagemin']
      },

      options: {
        livereload: true
      }

    },

    // The jade compile task
    jade: {
      compile: {
        files: {
					"source/markup/all.html": ["_files/index.jade"]
				},
        options: {
            data: grunt.file.readJSON("config.json"),
            pretty: true
        }
      }
    },

    //The stylus compile task
    stylus: {
      compile: {
        files: {
          'public/microscope.css':'source/style/all.styl'
        },
        options: {
          compress: false
        }
      },
      compress: {
        files: {
          'public/microscope.min.css':'source/style/all.styl'
        }
      }
    },

    //concat all JS
    concat: {
			dist: {
		      src: 'source/assets/scripts/*.js',
		      dest: 'public/assets/scripts/scripts.js'
		    }
		},

    //compress all js
    uglify: {
      my_target: {
        files: {
        'public/assets/scripts/scripts.js': ['_files/_scripts.js']
        }
      }
    },

    //Lint the CSS
    csslint: {
      strict: {
        src: ['public/microscope.css']
      }
    },

    //Post CSS for autoprefixer :)
    postcss: {
      options: {
        cascade: false,
        map: true,
        processors: [
          require('autoprefixer-core')({browsers: 'last 2 version, ie >= 9'})
        ]
      },
      dist: {
        src: 'public/*.css'
      }
    },

    //Clean temp files
    clean: ["source/markup/all.html"],

    //imagemin
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: '_files/',
          src: ['images/*.{png,jpg,gif}','images/*.{png,jpg,gif}'],
          dest: 'public/assets/'
        }]
      }
    },

    // Use for build the includes
    includes: {
      build: {
        cwd: 'source/markup',
        src: [ 'all.html'],
        dest: 'public/index.html',
        options: {
          flatten: true
        }
      }
    },

    //Starts the static server
    connect: {
      server: {
        options: {
          port: 9000,
          base: "public/",
          hostname: "localhost",
          livereload: true,
          open: true
        }
      }
    }

  });

  //Load all plugins
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-includes');
  grunt.loadNpmTasks('grunt-contrib-clean');

  //Tasks for build components
  grunt.registerTask('serve', ['connect','watch']);
  grunt.registerTask('build', ['jade:compile','stylus:compile','stylus:compress','concat','uglify','includes','clean','imagemin']);

  //Tasks for increase the quality
  grunt.registerTask('lint', ['csslint']);
  grunt.registerTask('autoprefixer', ['postcss']);

};
