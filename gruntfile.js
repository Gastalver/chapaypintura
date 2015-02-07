module.exports = function (grunt) {
  // Carga todas las tareas a partir de los nodos que incluyan la palabra grunt.
  require('load-grunt-tasks')(grunt);
  require('load-grunt-tasks')(grunt, {pattern: ['grunt-contrib-*', 'grunt-shell', 'grunt-bower-*']});
  // Muestra el tiempo que tarda cada tarea.
  require('time-grunt')(grunt);
  //grunt.loadNpmTasks("grunt-bower-install-simple");

  // Configurasione
  grunt.initConfig({
    "bower-install-simple": {
        options: {
            color: true,
			cwd: "app",
		}
		,
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
    }
 
   });
  
   
  
// Crea los directorios y archivos de trabajo que faltan.
grunt.registerTask('carpetas', function() {
	
	var fs=require('fs');
	fs.mkdir('./app/fonts');
	fs.mkdir('./app/styles');
	fs.mkdir('./app/scripts');
	console.log('Carpetas creadas');
});

// Instala los componentes Bower. Basicamente Bootstrap y JQuery.
grunt.registerTask("bower-install", [ "bower-install-simple:dev" ]);

grunt.registerTask("inicio", ["carpetas", "bower-install-simple:dev" ]);

grunt.registerTask('escribe', function(){
	//echo "@import \"../bower_components/bootstrap/less/bootstrap.less\";" > main2.less;
	console.log("@import \"../bower_components/bootstrap/less/bootstrap.less\";" > borrar.txt) ;
});


  
};