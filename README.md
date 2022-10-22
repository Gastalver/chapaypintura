# Chapaypintura
Mi entorno de diseño, rápidamente desplegado y operativo gracias a grunt.
## Descripción
Entorno de diseño de vistas (chapa y pintura) con Bootstrap 4, automatizado con GRUNT.


## Requisitos
* node.js
* grunt-cli
* grunt (global y local)
* sass (global)


## Instalación requisitos
### Instalación de node.js
Para instalar node.js descargar el ejecutable de instalación directamente desde [nodejs.org](http://nodejs.org). Esto instalará también su gestor de paquetes, npm, que será utilizado para instalar los módulos.
### Instalación de grunt-cli
Para instalar la interface de comandos de Grunt, ejecutar el comando:
```shell
    npm install -g grunt-cli
```
### Instalación de grunt
Grunt ha de ser instalado, en primer lugar, globalmente. Para ello, ejecutar el comando:
 ```shell
    npm install -g grunt
 ```
### Instalación de sass
Para instalar sass globalmente, ejecutar el comando:
```shell
    npm install -g sass
```
## Instalación entorno
### Clonar el repositorio.
Puede hacerse por medio del siguiente comando: 

```shell
    git clone https://github.com/Gastalver/chapaypintura.git
```

### Instalar dependencias (node modules)
Para instalar los paquetes de node.js ejecutar:

```shell
    npm install
```
### Desplegar el entorno
Finalmente ejecutar:
```shell
    grunt inicializar
```
* Por defecto tenemos la siguiente estructura de carpetas:
```shell
    /src                    //-> Source. Código fuente para personalizar Bootstrap 
    /src/custom.scss        //-> Fuentes SASS (Bootstrap)
    /dist                   //-> Distribution. Resultado final para producción
    /dist/custom.css        //-> Hoja de estilos Bootstrap personalizada
```
Además tenemos un archivo index.html que importa directamente del CDN oficinal el paquete de Javascript de Bootstrap. Más adelante ya veremos si añadimos herramientas para generar un paquete de javascript que sólo contenga lo que vamos a utilizar.
## Tareas disponibles
Para ver las tareas automatizadas disponibles ejecutar:
```shell
    grunt --help
```
### Para reanudar el trabajo
```shell
    grunt dale
```



