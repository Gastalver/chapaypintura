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
		}	
	}
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
grunt.registerTask('inicializa', 'Despliega el entorno. Es el primer comando a ejecutar.',['carpetiza','boweriza']);

// Transcompila de less a css
grunt.registerTask('cssiza', ["less:dist"]);

//Vigila si hay cambios   
grunt.registerTask("vigila",'Vigila si hay cambios en los archivos less, recompila y recarga.',['watch']);


};