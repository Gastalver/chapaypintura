# Chapaypintura
Mi entorno de diseño, rápidamente desplegado y operativo gracias a grunt.

## Requisitos
* node.js
* grunt-cli
* grunt (global y local)
* bower (global)

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
## Instalación entorno
### Clonar el repositorio.
Puede hacerse por medio del siguiente comando: 

```shell
    git clone https://github.com/Gastalver/chapaypintura.git
```
Si se va crear un nuevo trabajo hay que editar .gitignore para incluir, si fuera necesario, las carpetas app/scripts y fonts, ya que estan excluidas por defecto.


### Instalar dependencias
Para instalar los paquetes de node.js ejecutar:

```shell
    npm install
```
### Desplegar el entorno
Finalmente ejecutar:
```shell
    grunt inicializar
```

## Tareas disponibles
Para ver las tareas automatizadas disponibles ejecutar:
```shell
    grunt --help
```
### Para reanudar el trabajo
```shell
    grunt dale
```



