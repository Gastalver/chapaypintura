module.exports = function (grunt) {
  // Carga todas las tareas a partir de los paquetes de node definidos en package.json que incluyan los patrones.
  require('load-grunt-tasks')(grunt);
  
  // Muestra el tiempo que tarda cada tarea tras haberla ejecutado.
  require('time-grunt')(grunt);

  // Configuraciones
  grunt.initConfig({
    "bower-install-simple": {
        options: {
			cwd: ".",
			directory: "app/bower_components"
		},
		"prod": {
            options: {
                production: true
            }
        },
        "dev": {
            options: {
                production: false
            }
        }
	},
	clean: {
        app: ["app/styles", "app/bower_components", "app/scripts", "app/fonts"],
        todo: ["./app"]
    },
	less: {
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
	watch: {
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
    jshint: {
		gruntfile: ['Gruntfile.js'],
		todo: ['Gruntfile.js','app/scripts/**/*.js']
    },
	connect: {
		options: {
			port: 9000,
			hostname: 'localhost',
			base : './app',
			keepalive: false,
			livereload: 35729
		},
		autoactualiza: {
			options: {
				open: true,
				base: ['.tmp','./app']
			}
		}
	},
	copy: {
        dist: {
            files: [
            	{
            	expand: true,
                dot: true,
                cwd: './app/bower_components/Font-Awesome/fonts/',
          		dest: './app/fonts/font-awesome',
          		src: ['*']
        		}, 
        		{
        		expand: true,
          		dot: true,
          		cwd: './app/bower_components/bootstrap/dist/fonts/',
          		dest: './app/fonts/glyphicons',
          		src: ['*']
        		}, 
        		{
        		expand: true,
          		dot: true,
          		cwd: './app/bower_components/modernizr/',
          		dest: './app/scripts',
          		src: ['modernizr.js']
        		}, 
        		{
        		expand: true,
          		dot: true,
          		cwd: './app/bower_components/jquery/',
          		dest: './app/scripts',
          		src: ['jquery.min.js']
        		}, 
        		{
        		expand: true,
          		dot: true,
          		cwd: './app/bower_components/bootstrap/dist/js/',
          		dest: './app/scripts',
          		src: ['bootstrap.min.js']
        		}

        	]
      	}
    },
  });

// Borra archivos y carpetas
grunt.registerTask('limpieza', 'Borra archivos y carpetas regenerables.',["clean:app"]);
   
// Crea los directorios y archivos de trabajo que faltan.
grunt.registerTask('carpetiza', 'Crea todas las carpetas necesarias.',function() {
	
	var fs=require('fs');
	fs.mkdir('./app/fonts');
	fs.mkdir('./app/styles');
	fs.mkdir('./app/scripts');
	console.log('Carpetas creadas');
});

// Instala las fuentes de los componentes del front-end  con Bower: Bootstrap, JQuery y FontAwesome.
grunt.registerTask('boweriza','Instala todos los componentes del front-end via Bower.', [ "bower-install-simple:dev" ]);

// Transcompila de less a css
grunt.registerTask('cssiza','Compila less en css', ["less:dist"]);

//Trasiego de archivos de fuentes, jquery, y js de bootstrap a distribucion.
grunt.registerTask('trasieguiza','Copia archivos de fuentes a distribucion',['copy:dist']);

//Comprueba uso correcto de Javascript
grunt.registerTask('jshintiza','Comprueba uso correcto de javascript',['jshint:todo']);

//Crea un servidor http
grunt.registerTask('httpiza','Inicia un servidor http',['connect']);

//Vigila si hay cambios, recompila less, comprueba js, y recarga htpp   
grunt.registerTask('vigila','Vigila si hay cambios en los archivos less, recompila y recarga.',['watch']);

grunt.registerTask('inicializa', 'Despliega el entorno. Es el primer comando a ejecutar.',['limpieza','carpetiza','boweriza','cssiza','trasieguiza','dale']);

//Tarea para seguir trabajando.
grunt.registerTask('dale','Una vez inicializado el entorno, para volver a ponerlo en marcha',['httpiza:autoactualiza','vigila']);


};