# Chapaypintura
Mi entorno de diseño, rápidamente desplegado y operativo gracias a grunt.

## Requisitos
* node.js
* grunt-cli
* grunt (global y local)

## Instalación requisitos
### Instalación de node.js
Para instalar node.js descargar el ejecutable de instalación directamente desde [nodejs.org](http://nodejs.org). Esto instalará también su gestor de paquetes, npm, que será utilizado para instalar los módulos.
### Instalación de grunt-cli
Para instalar la interface de comandos de Grunt, ejecutar el comando:
    npm install -g grunt-cli
### Instalación de grunt
Grunt ha de ser instalado, en primer lugar, globalmente. Para ello, ejecutar el comando:
    npm install -g grunt
## Instalación entorno
### Clonar el repositorio.
Puede hacerse por medio del siguiente comando:
git clone https://github.com/Gastalver/chapaypintura.git
Una vez clonado, tendremos un directorio /chapaypintura que contiene los siguiente archivos:
* Package.json
* gruntfile.js
### Instalar dependencias de node.js
Para instalar los módulos de node.js que necesita el entorno, ejecutar el comando:
    npm install
## Tareas disponibles
Las tareas disponibles son las siguientes:
* despliega - Crea los directorios que habitualmente uso para trabajar.
* less - Compila los archivos de less a css.
	

