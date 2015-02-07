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
	"clean": {
        app: ["app/styles", "app/bower_components", "app/scripts", "app/fonts"],
        todo: ["./app"]
        }
   });

// Borra archivos y carpetas
grunt.registerTask('limpia', ["clean:app"]);
   
// Crea los directorios y archivos de trabajo que faltan.
grunt.registerTask('carpetiza', function() {
	
	var fs=require('fs');
	fs.mkdir('./app/fonts');
	fs.mkdir('./app/styles');
	fs.mkdir('./app/scripts');
	console.log('Carpetas creadas');
});

// Instala las fuentes de los componentes del front-end  con Bower: Bootstrap, JQuery y FontAwesome.
grunt.registerTask("boweriza", [ "bower-install-simple:dev" ]);
grunt.registerTask('inicio', ['carpetas','bower-install-simple:dev']);


  
};