module.exports = function (grunt) {

	// Carga todas las tareas a partir de los paquetes de node definidos en package.json que incluyan los patrones.
  require('load-grunt-tasks')(grunt);

  // Muestra el tiempo que tarda cada tarea tras haberla ejecutado.
  require('time-grunt')(grunt);

  // Configuración
  grunt.initConfig({


	  // Compila scss a css
	  'dart-sass': {
          custom: {
              options: {
				  // outputStyle: 'compressed'
			  },
              files: {
				  'assets/css/custom.css': 'src/scss/custom.scss'
			  }
          }
      },

	  // Ejecuta una tarea cuando detecta un cambio en un archivo.
	  watch: {

		  // Compila SCSS a CSS si cambia archivo custom.scss
		  scssFile: {
			files: 'src/scss/custom.scss',
			tasks:'dart-sass:custom',
		  },

		  // Revisa código si cambia archivo gruntfile.js
		  gruntFile:{
			  files: 'gruntfile.js',
			  tasks: 'jshint:gruntFile'
		  },

		  // Recarga servidor si cambian archivos dist (html,css).
		  autoactualiza: {
			  options: {
				  livereload: 35729
			  },
			  files: [
				  'dist/*.html',
				  'dist/assets/css/*.css',
			  ]
		  }
	},

	  // Ejecuta análisis javascript
	  jshint: {
		// Si cambia archivo de configuración de grunt.
		gruntFile: ['gruntfile.js'],
		// TODO: Si cambian archivos javascript de la fuente o la distribución
		javascript: []
    },

	  // Crea un servidor local	http
	  connect: {
		  options: {
			  port: 9000,
			  hostname: 'localhost',
			  base : './dist',
			  keepalive: false,
			  livereload: 35729
		  },
		  autoactualiza: {
			  options: {
				  open: true,
				  base: ['.tmp','./dist']
			  }
		  }
	},

	  // Copia archivos de fontawesome (fa)
	  copy: {
		  fa: {
			  files: [
				  {
					  // Font-Awesome webfonts
					  expand: true,
					  dot: true,
					  cwd: './node_modules/@fortawesome/fontawesome-free/webfonts/',
					  dest: 'dist/assets/fontawesome/',
					  src: ['*']
				  },
				  {
					  // Font-Awesome css
					  expand: true,
					  dot: true,
					  cwd: './node_modules/@fortawesome/fontawesome-free/css/',
					  dest: 'dist/assets/fontawesome/',
					  src: ['*']
				  },
			  ]
		  }
	  },

  });

// TAREAS

//Arranque del entorno.
grunt.registerTask('Start','Inicia el entorno',['connect','watch']);
};

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
