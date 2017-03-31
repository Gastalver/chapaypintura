module.exports = function (grunt) {

	// Carga todas las tareas a partir de los paquetes de node definidos en package.json que incluyan los patrones.
  require('load-grunt-tasks')(grunt);
  
  // Muestra el tiempo que tarda cada tarea tras haberla ejecutado.
  require('time-grunt')(grunt);

  // Configuraciones
  grunt.initConfig({

	clean: { // Borra carpetas
        assets: ["./dist/assets/"],
        assetsTodo: ["./dist/assets/", "./src/"],
    },
	less: {  // Compila Less
      dist: {
        files: {
          'app/styles/main.css': ['app/less/main.less']
        },
        options: {
          sourceMap: true,
          sourceMapFilename: 'app/styles/main.css.map',
          sourceMapBasepath: 'app',
          sourceMapRootpath: '/'
        }
      }
    },
	watch: { // Ejecuta una tarea cuando detecta un cambio en un archivo.
		less: {
			files:['app/less/**/*.less'],
			tasks:'cssiza',
			options:{
				livereload: true
			}
		},
		gruntfile: {
			files:['gruntfile.js'],
			tasks: ['jshintiza']
		},
		autoactualiza: {
            options: {
                livereload: 35729
			},
			files: [
				'app/*.html',
				'app/styles/{,*/}*.css',
				'app/scripts/{,*/}*.js',
				'app/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
			]
		}
	},
    jshint: { // Revisa sintaxis
		gruntfile: ['Gruntfile.js'],
		todo: ['Gruntfile.js','app/scripts/**/*.js']
    },
	connect: {  // Crea un servidor.
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
	copy: { // Copia archivos.
        assets: {
            files: [
            	{ // Font-Awesome fonts
            	expand: true,
                dot: true,
                cwd: './node_modules/font-awesome/fonts/',
          		dest: './dist/assets/fonts/',
          		src: ['*']
        		},
                { // Font-Awesome css
                    expand: true,
                    dot: true,
                    cwd: './node_modules/font-awesome/css/',
                    dest: './dist/assets/css/',
                    src: ['font-awesome.min.css']
                },
                { // Font-Awesome css SOURCE
                    expand: true,
                    dot: true,
                    cwd: './node_modules/font-awesome/scss/',
                    dest: './src/font-awesome/scss',
                    src: ['*']
                },
        		{
        		expand: true, // Bootstrap css
          		dot: true,
          		cwd: './node_modules/bootstrap/dist/css/',
          		dest: './dist/assets/css',
          		src: ['bootstrap.min.css']
        		},
                {
                	expand: true, // Bootstrap js
                    dot: true,
                    cwd: './node_modules/bootstrap/dist/js/',
                    dest: './dist/assets/js',
                    src: ['bootstrap.min.js']
                },
                {
                    expand: true, // JQuery
                    dot: true,
                    cwd: './node_modules/bootstrap/node_modules/jquery/dist/',
                    dest: './dist/assets/js',
                    src: ['jquery.min.js']
                },
                {
                    expand: true, // Theter
                    dot: true,
                    cwd: './node_modules/bootstrap/node_modules/tether/dist/js',
                    dest: './dist/assets/js',
                    src: ['tether.min.js']
                },
        		{
        		expand: true, // Bootstrap css SOURCE
          		dot: true,
          		cwd: './node_modules/bootstrap/scss',
          		dest: './src/bootstrap4/scss',
          		src: ['*']
        		},
                {
                    expand: true, // Bootstrap js SOURCE
                    dot: true,
                    cwd: './node_modules/bootstrap/js/src',
                    dest: './src/bootstrap4/js',
                    src: ['*']
                }
        	]
      	}
    },
  });

// Borra archivos y carpetas
grunt.registerTask('limpieza', 'Borra archivos y carpetas regenerables.',["clean:assetsTodo"]);
   
// Crea los directorios y archivos de trabajo que faltan.
grunt.registerTask('carpetiza-Assets', 'Crea todas las carpetas necesarias.',function() {

	    var fs=require('fs');
	    fs.mkdir('./dist/assets');
        fs.mkdir('./dist/assets/css');
        fs.mkdir('./dist/assets/fonts');
        fs.mkdir('./dist/assets/img');
        fs.mkdir('./dist/assets/js');
    	fs.mkdir('./src');
    	fs.mkdir('./src/bootstrap4');
    	fs.mkdir('./src/bootstrap4/scss');
    	fs.mkdir('./src/font-awesome');
    	fs.mkdir('./src/font-awesome/scss');



	console.log('Carpetas creadas');
});

// Transcompila de less a css
grunt.registerTask('cssiza','Compila less en css', ["less:dist"]);

//Trasiego de archivos de fuentes, jquery, y js de bootstrap a distribucion.
grunt.registerTask('trasieguiza','Copia archivos de fuentes a distribucion',['copy:assets']);

//Comprueba uso correcto de Javascript
grunt.registerTask('jshintiza','Comprueba uso correcto de javascript',['jshint:todo']);

//Crea un servidor http
grunt.registerTask('httpiza','Inicia un servidor http',['connect']);

//Vigila si hay cambios, recompila less, comprueba js, y recarga htpp   
grunt.registerTask('vigila','Vigila si hay cambios en los archivos less, recompila y recarga.',['watch']);

grunt.registerTask('inicializa', 'Despliega el entorno. Es el primer comando a ejecutar.',['limpieza','carpetiza-Assets','trasieguiza','dale']);

//Tarea para seguir trabajando.
grunt.registerTask('dale','Una vez inicializado el entorno, para volver a ponerlo en marcha',['httpiza:autoactualiza','vigila']);


};