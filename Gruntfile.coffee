module.exports = (grunt) ->
  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'

    jshint:
      all: ['js/**/*.js']

    concat:
      options:
        separator: ';'
      app:
        src: ['src/**/*.js']
        dest: 'build/js/<%= pkg.name %>.js'

    copy:
      vendor:
        files:
          'build/js/jquery.min.js': 'libs/jquery-dist/jquery.min.js'
          'build/js/underscore-min.js': 'libs/underscore/underscore-min.js'
          'build/js/backbone-min.js': 'libs/backbone/backbone-min.js'
          'build/js/require.js': 'libs/requirejs/require.js'
      index:
        files:
          'build/index.html': 'src/index.html'
        options:
          process: (content, srcpath) ->
            content.replace '{{packageName}}', 'app.min'

    uglify:
      options:
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      app:
        files:
          'build/js/<%= pkg.name %>.min.js': 'build/js/<%= pkg.name %>.js'

    watch:
      app:
        files: ['src/**/*.js']
        tasks: ['jshint', 'concat:app', 'uglify:app']

  grunt.loadNpmTasks 'grunt-contrib-jshint'
  grunt.loadNpmTasks 'grunt-contrib-concat'
  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.loadNpmTasks 'grunt-contrib-copy'
  grunt.loadNpmTasks 'grunt-contrib-watch'

  grunt.registerTask 'default', ['concat', 'uglify', 'copy', 'watch']
