module.exports = function (grunt) {

	// Carga todas las tareas a partir de los paquetes de node definidos en package.json que incluyan los patrones.
  require('load-grunt-tasks')(grunt);

  // Muestra el tiempo que tarda cada tarea tras haberla ejecutado.
  require('time-grunt')(grunt);

  // Configuraciones
  grunt.initConfig({

	  copy: { // Copia archivos.
		  fa: {
			  files: [
				  { // Font-Awesome webfonts
					  expand: true,
					  dot: true,
					  cwd: './node_modules/@fortawesome/fontawesome-free/webfonts/',
					  dest: './dist/assets/fontawesome/',
					  src: ['*']
				  },
				  { // Font-Awesome css
					  expand: true,
					  dot: true,
					  cwd: './node_modules/@fortawesome/fontawesome-free/css/',
					  dest: './dist/assets/fontawesome/',
					  src: ['*']
				  },
				  ]
		  }
	  },

      'dart-sass': { // Compila scss a css
          target: {
              options: {
				  // outputStyle: 'compressed'
			  },
              files: {
				  'dist/assets/css/custom.css': 'src/scss/custom.scss'
			  }
          }
      },

	  watch: { // Ejecuta una tarea cuando detecta un cambio en un archivo.

		  configFiles:{
			files: ['gruntfile.js'],
			tasks: 'jshint:gruntfile'
		  },

		  scss: {
			files:['./src/scss/custom.scss'],
			tasks:'dart-sass:target',
			options:{ spawn: false}
		  },

		  dist: {
			files: [
				'./*.html',
				'./dist/assets/css/*.css',
				'./dist/assets/javascript/*.js',
				'./dist/assets/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
			],
			options: {
				livereload: true
			}
		}
	},

	  jshint: { // Revisa sintaxis
		gruntfile: ['gruntfile.js'],
		javascript: []
    },

	  'connect': {  // Crea un servidor.
		options: {
			port: 9000,
			hostname: 'localhost',
			base : './dist',
			keepalive: false,
			livereload: 35729
		},
		autoActualiza: {
			options: {
				open: true,
				base: ['.tmp','./dist']
			}
		}
	}
  });

// Crea los directorios y archivos de trabajo que faltan.
// grunt.registerTask('carpetiza-Assets', 'Crea todas las carpetas necesarias.',function() {
//
// 	    var fs = require('fs');
// 	    fs.mkdir('./dist/assets');
//         fs.mkdir('./dist/assets/css');
//         fs.mkdir('./dist/assets/fonts');
//         fs.mkdir('./dist/assets/img');
//         fs.mkdir('./dist/assets/js');
//     	fs.mkdir('./src');
//     	fs.mkdir('./src/bootstrap4');
//     	fs.mkdir('./src/bootstrap4/scss');
//     	fs.mkdir('./src/font-awesome');
//     	fs.mkdir('./src/font-awesome/scss');
// 	console.log('Carpetas creadas');
// });

//Arranque del entorno.
grunt.registerTask('Start','Inicia el entorno',['connect','watch']);
};
