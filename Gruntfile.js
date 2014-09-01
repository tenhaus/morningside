module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		connect: {
			server: {
				options: {}
			}
		},

		watch: {
			options: {
				livereload: true,
			},
			files: ['less/**/*.less', 'index.html'],
			tasks: 'less:development',
		},

		reload: {
        port: 8000,
        proxy: {
            host: 'localhost',
        }
    },

		less: {
			development: {
				options: {
					paths: ['less'],
				},
				files: {
					'css/template.css' : 	'less/template.less',
					'css/theme.css' : 	'less/theme.less',
				}
			}
		},

	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.registerTask('default', ['less', 'connect', 'watch']);

};