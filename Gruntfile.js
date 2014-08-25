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
			files: ['css/**/*.css', 'index.html'],
		},

		reload: {
        port: 8000,
        proxy: {
            host: 'localhost',
        }
    },

	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.registerTask('default', ['connect', 'watch']);

};