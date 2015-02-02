module.exports = function (grunt) {
  // Carga todas las tareas a partir de los nodos que incluyan la palabra grunt.
  require('load-grunt-tasks')(grunt);
  // Muestra el tiempo que tarda cada tarea.
  require('time-grunt')(grunt);

  

// Crea los directorios y archivos de trabajo.
grunt.registerTask('carpetas', function() {
	
	var fs=require('fs');
	fs.mkdir('./app');
	fs.mkdir('./app/fonts');
	fs.mkdir('./app/less');
	fs.mkdir('./app/styles');
	fs.mkdir('./app/scripts');
	console.log('Carpetas creadas');
	
	
	fs.writeFile('./app/less/main.less', 'cojones', function (err) {
       if (err) throw err;
       console.log('It\'s saved!');
    });
	
});

  
};