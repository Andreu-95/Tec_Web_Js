# Sails

### Materia: `Tecnologías Web con Javascript`
### Tema: `Sails`
### Fecha: `2017-01-05`
### Estudiante: `Andrés David Guerra Vásconez`
### Profesor: `Adrián Eguez`
### Número de Informe: `5`

<a name="Cabecera"></a>
## Índice de Contenidos
- <a href="#Tema">Tema</a>
- <a href="#Objetivos">Objetivos</a>
- <a href="#MarcoTeorico">Marco Teórico</a>
    * <a href="#Sails">Sails</a>
    * <a href="#Assets">Assets</a>
    * <a href="#Vistas">Vistas</a>
    * <a href="#Rutas">Rutas</a>
    * <a href="#Controladores">Controladores</a>
    * <a href="#Pipeline">Pipeline</a>
- <a href="#Desarrollo">Desarrollo de la Práctica</a>
    * <a href="#Instalacion">Instalación Sails</a>
    * <a href="#Proyecto">Crear Proyecto Sails</a>
    * <a href="#Controlador">Crear Controlador para el Proyecto</a>
- <a href="#ConRec">Conclusiones y Recomendaciones</a>
    
<a name="Tema"></a>
## Tema
Tema de la Práctica: `SAILS.`

<a name="Objetivos"></a>
## Objetivos
- Aprender como instalar y utilizar Sails para la creación de proyectos web.
- Aprender los conceptos básicos de cada una de las partes que conforman un proyecto de Sails.
- Entender como funciona el modelo vista controlador y como hace uso Sails del mismo.

<a name="MarcoTeorico"></a>
## Marco Teórico
<a name="Sails"></a>
### Sails
Sails es un framework web. Sin embargo no es un framework hecho para la parte frontal de una página Web, es decir, todo lo que se refiere a estándares como HTML5 o CSS3, estos tienen frameworks como Backbones, Angular, JQuery y demás. Si bien Sails trabaja bien con estos frameworks, no significa que pueda reemplazarlos.
<br>
Por otro lado, Sails es un framework que trabaja con la funcionalidad que ocurre por detrás de un sitio web, es decir, se aplican conceptos como REST, HTTP, WebSockets y la implementación de tecnologías como Java, Ruby, Node.js y demás. Por ello, Sails ayuda a que construyamos APIs, utilizar archivos HTML y manejar varios de usuarios.
<br>
(Fuente: [Sails.js](http://sailsjs.com/whats-that))

<br>
<a href="#Cabecera">Cabecera</a>


<a name="Assets"></a>
### Assets
Los Assets hacen referencia a los archivos estáticos, por ejemplo js, css, imágenes y demás de nuestro servidor que nosotros queremos hacerlas asequibles al resto del mundo. En Sails, estos archivos se colocan en la carpeta `assets/`. Cuando levantamos la aplicación, añadimos o cambiamos archivos de la carpeta `assets/`; el pipeline de Sails procesa y sincroniza dichos archivos en un folder oculto `.tmp/public/`.
<br>
Los contenidos de dicha carpeta son los que Sails muestra en tiempo de ejecución. Esta carpeta es equivalente a la carpeta "public" de express o a la carpeta `www/` de un servidor Apache.
<br>
(Fuente: [Sails.js](http://sailsjs.com/documentation/concepts/assets))

<br>
<a href="#Cabecera">Cabecera</a>


<a name="Vistas"></a>
### Vistas
En Sails, las vistas son plantillas que son compiladas en el servidor dentro de las páginas HTML. En la mayoría de los casos, las vistas son usadas como respuesta a una petición HTTP entrante para la página de inicio.
<br>
De manera alternativa, una vista puede ser compilada directamente dentro de una cadena HTML para ser usada en el código de adentro. Por ello, es posible usar para el envió de emails HTML, o para construir cadenas XML para usarlas en una API del legado.
<br>
(Fuente: [Sails.js](http://sailsjs.com/documentation/concepts/views))

<br>
<a href="#Cabecera">Cabecera</a>


<a name="Rutas"></a>
### Rutas
La característica más básica de una página es la habilidad de interpretar una petición enviada a una URL, para luego enviar una respuesta. Para hacer esto, la aplicación tiene que ser capaz de distinguir una URL de otra.
<br>
Como la mayoría de los framework web, Sails provee un enrutador: un mecanismo para mapear URLs a controladores y vistas. Las rutas son reglas que le dicen a Sails que hacer cuando se encuentra con una petición entrante. Existen dos tipos de rutas: personalizada y automática.
<br>
(Fuente: [Sails.js](http://sailsjs.com/documentation/concepts/routes))

<br>
<a href="#Cabecera">Cabecera</a>


<a name="Controladores"></a>
### Controladores
Los controladores son los objetos principales en una aplicación Sails que son los responsables de responder las peticiones de un navegador web, aplicación móvil o cualquier otro sistema capaz de comunicarse con un servidor. Usualmente estos actúan como un hombre en el medio entre los modelos y las vistas. Para muchas aplicaciones, los controladores contienen todo la lógica del negocio del proyecto.
<br>
(Fuente: [Sails.js](http://sailsjs.com/documentation/concepts/controllers))

<br>
<a href="#Cabecera">Cabecera</a>


<a name="Pipeline"></a>
### Pipeline
El pipeline es el lugar en donde se organizan todos los assets que van a ser inyectados en las vistas, y que pueden ser encontradas en el archivo `tasks/pipeline.js`. Configurar estos assets es simple y usa un archivo de configuración grunt y patrones wildcard. Estos están repartidos en tres secciones.
#### Archivos CSS a inyectar
Este es un arreglo de archivos CSS que se inyectarán en el html como tags `<link>`. Estos tags van a ser inyectados entre los comentarios `<!--STYLES--><!--STYLES END-->` en cualquier vista en la que aparezcan.
#### Archivos Javascript a inyectar
Este es un arreglo de archivos Javascript que se inyectarán en el html como tags `<script>`. Estos tags van a ser inyectados entre los comentarios `<!--SCRIPTS--><!--SCRIPTS END-->` en cualquier vista en la que aparezcan. Los archivos se colocan en el orden en el que están en el arreglo.
#### Archivos de Plantilla a inyectar
Este es un arreglo de archivos HTML que serán compilados en una función jst y colocados en un archivo jst.js. Este archivo entonces es colocado en un tag `<script>` entre los comentarios `<!--TEMPLATES--><!--TEMPLATES END-->` en el html.
<br>
(Fuente: [Sails.js](http://sailsjs.com/documentation/concepts/assets/task-automation))

<br>
<a href="#Cabecera">Cabecera</a>

<a name="Desarrollo"></a>
## Desarrollo de la Práctica
<a name="Instalacion"></a>
### Instalación Sails
Para instalar Sails en nuestro computador de manera global, lo hacemos con npm utilizando el siguiente comando.
<p align="center">
    <img src="https://raw.githubusercontent.com/Andreu-95/Tec_Web_Js/10-Sails/Informe/Images/sails1.png">
</p>

<br>
<a href="#Cabecera">Cabecera</a>


<a name="Proyecto"></a>
### Crear Proyecto Sails
Para crear un proyecto en Sails, ejecutamos el siguiente comando en la carpeta donde queremos guardarlo.
<p align="center">
    <img src="https://raw.githubusercontent.com/Andreu-95/Tec_Web_Js/10-Sails/Informe/Images/sails2.png">
</p>

<br>
Ahora que ya está creado, dentro de la carpeta assets vamos a colocar un html, un css y un script de ejemplo para ver como los procesa Sails.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Prueba Sails</title>
    
    <link rel="stylesheet" href="estilos.css">
</head>
<body>
    <h1>Hola mundo</h1>
    
    <script src="script.js"></script>
</body>
</html>
```
```css
body {
    background-color: deepskyblue;
    color: crimson;
}
```
```javascript
alert('No se deben usar alertas');
```

<br>
Para probar nuestra página, primero necesitamos levantar el servidor con el siguiente comando. Es necesario asegurarnos de que estamos en la carpeta del proyecto.
<p align="center">
    <img src="https://raw.githubusercontent.com/Andreu-95/Tec_Web_Js/10-Sails/Informe/Images/sails3.png">
</p>

<br>
Ahora, podemos ver nuestra página web en la dirección y puerto que tiene Sails e indicando la carpeta en donde se encuentra.
<p align="center">
    <img src="https://raw.githubusercontent.com/Andreu-95/Tec_Web_Js/10-Sails/Informe/Images/sails4.png" width="1000">
</p>

<br>
Ahora, vamos a añadir una imagen nuestra página web, esta debe estar en la misma carpeta que el resto. Así, después de volver a levantar el servidor, observamos como efectivamente si muestra la imagen.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Prueba Sails</title>
    
    <link rel="stylesheet" href="estilos.css">
</head>
<body>
    <h1>Hola mundo</h1>
    
    <img src="zeus.jpg" alt="Zeus">
    
    <script src="script.js"></script>
</body>
</html>
```
<p align="center">
    <img src="https://raw.githubusercontent.com/Andreu-95/Tec_Web_Js/10-Sails/Informe/Images/sails5.png" width="1000">
</p>

<br>
Ahora, para usar nuestros estilos en todas las páginas, debemos colocarlos en la carpeta `assets/styles/`.
```css
body {
    background-color: greenyellow;
    color: crimson;
}
```
<p align="center">
    <img src="https://raw.githubusercontent.com/Andreu-95/Tec_Web_Js/10-Sails/Informe/Images/sails6.png" width="1000">
</p>

<br>
Si queremos cargar un archivo css en específico, debemos especificar cual en el archivo `pipeline.js`.
```css
body {
    background-color: firebrick;
    color: white;
}
```
```javascript
// CSS files to inject in order
//
// (if you're using LESS with the built-in default config, you'll want
//  to change `assets/styles/importer.less` instead.)
var cssFilesToInject = [
  // 'styles/**/*.css'
    'styles/estilos2.css'
];
```
<p align="center">
    <img src="https://raw.githubusercontent.com/Andreu-95/Tec_Web_Js/10-Sails/Informe/Images/sails7.png" width="1000">
</p>

<br>
También podemos hacer los mismo con los scripts, así mismo, debemos modificar el archivo `pipeline.js`.
```javascript
// Client-side javascript files to inject in order
// (uses Grunt-style wildcard/glob/splat expressions)
var jsFilesToInject = [

  // Load sails.io before everything else
  'js/dependencies/sails.io.js',

  // Dependencies like jQuery, or Angular are brought in here
  'js/dependencies/**/*.js',
  'app/script.js',

  // All of the rest of your client-side js files
  // will be injected here in no particular order.
  'js/**/*.js'
];
```
<p align="center">
    <img src="https://raw.githubusercontent.com/Andreu-95/Tec_Web_Js/10-Sails/Informe/Images/sails8.png" width="1000">
</p>

<br>
El archivo que se despliega en el servidor es `layout.ejs`. Tiene una etiqueta especial `<%- body %>`, en esta se carga todo el cuerpo de la página. Sin embargo, podemos añadir etiquetas aquí directamente.
```html
<h1>Hola</h1>
<h2>Aquí comienza el homepage</h2>
<%- body %>
<h2>Aquí termina el homepage</h2>
<h1>Adiós</h1> 
```
<p align="center">
    <img src="https://raw.githubusercontent.com/Andreu-95/Tec_Web_Js/10-Sails/Informe/Images/sails9.png" width="1000">
</p>

<br>
Así mismo, en este archivo podemos cargar estilos directamente.
```css
<style>
    .morado {
        background-color: purple;
    }
</style>
```
```html
<div class="morado">
    <h1>Hola</h1>
    <h2>Aquí comienza el homepage</h2>
</div>
```
<p align="center">
    <img src="https://raw.githubusercontent.com/Andreu-95/Tec_Web_Js/10-Sails/Informe/Images/sails10.png" width="1000">
</p>

<br>
Como vimos, Sails maneja vistas y no páginas directamente. Por ello en la URL no se muestra un archivo html. También podemos crear nuestras propias vistas y dentro del archivo `routes.js` indicamos mediante que URL serán cargadas estas vistas.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Cuenca</title>
</head>
<body>
    <h1>Cuenca</h1>
</body>
</html>
```
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Guayaquil</title>
</head>
<body>
    <h1>Guayaquil</h1>
</body>
</html>
```
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Quito</title>
</head>
<body>
    <h1>Quito</h1>
</body>
</html>
```
```javascript
// routes.js

'/Quito': {
      view: 'quito'
  },
    
  '/Guayaquil': {
      view: 'guayaquil'
  },
    
  '/Cuenca': {
      view: 'cuenca'
  }
```
<p align="center">
    <img src="https://raw.githubusercontent.com/Andreu-95/Tec_Web_Js/10-Sails/Informe/Images/sails11.png" width="1000">
</p>
<p align="center">
    <img src="https://raw.githubusercontent.com/Andreu-95/Tec_Web_Js/10-Sails/Informe/Images/sails12.png" width="1000">
</p>
<p align="center">
    <img src="https://raw.githubusercontent.com/Andreu-95/Tec_Web_Js/10-Sails/Informe/Images/sails13.png" width="1000">
</p>

<br>
Para hacer un mejor traslado entre las vistas desde la vista de la página principal, podemos añadir un menú al archivo `layout.ejs`.
```html
<ul>
    <li><a href="/Cuenca">Cuenca</a></li>
    <li><a href="/Guayaquil">Guayaquil</a></li>
    <li><a href="/Quito">Quito</a></li>
    <li><a href="/">Home</a></li>
</ul>
```
<p align="center">
    <img src="https://raw.githubusercontent.com/Andreu-95/Tec_Web_Js/10-Sails/Informe/Images/sails14.png" width="1000">
</p>
<p align="center">
    <img src="https://raw.githubusercontent.com/Andreu-95/Tec_Web_Js/10-Sails/Informe/Images/sails15.png" width="1000">
</p>

<br>
<a href="#Cabecera">Cabecera</a>


<a name="Controlador"></a>
### Crear Controlador para el Proyecto
Primero, para crear un controlador para el proyecto utilizamos el siguiente comando.
<p align="center">
    <img src="https://raw.githubusercontent.com/Andreu-95/Tec_Web_Js/10-Sails/Informe/Images/sails16.png">
</p>

<br>
Ahora, con el controlador creado vamos a colocarle una funcionalidad básica.
```javascript
module.exports = {
	hola: function (req, res) {
        res.send('Hola');
    },
    
    adios: function (req, res) {
        res.send('Adiós');
    },
    
    hora: function (req, res) {
        res.send('Hora');
    }
};
```
<p align="center">
    <img src="https://raw.githubusercontent.com/Andreu-95/Tec_Web_Js/10-Sails/Informe/Images/sails17.png" width="1000">
</p>
<p align="center">
    <img src="https://raw.githubusercontent.com/Andreu-95/Tec_Web_Js/10-Sails/Informe/Images/sails18.png" width="1000">
</p>
<p align="center">
    <img src="https://raw.githubusercontent.com/Andreu-95/Tec_Web_Js/10-Sails/Informe/Images/sails19.png" width="1000">
</p>

<br>
Podemos indicar a nuestro controlador que respuesta debe enviar, dependiendo del método HTTP con que se haga la petición.
```javascript
module.exports = {
	hola: function (req, res) {
        if (req.method === 'GET') {
            res.json({
                nombre: 'hola get'
            });
        } else if (req.method === 'POST') {
            res.json({
                nombre: 'hola post'
            });
        } else {
            res.json({
                nombre: 'hola todos'
            });
        }
    },
    
    adios: function (req, res) {
        res.send('Adiós');
    },
    
    hora: function (req, res) {
        res.send('Hora');
    }
};
```
<p align="center">
    <img src="https://raw.githubusercontent.com/Andreu-95/Tec_Web_Js/10-Sails/Informe/Images/sails20.png">
</p>
<p align="center">
    <img src="https://raw.githubusercontent.com/Andreu-95/Tec_Web_Js/10-Sails/Informe/Images/sails21.png">
</p>
<p align="center">
    <img src="https://raw.githubusercontent.com/Andreu-95/Tec_Web_Js/10-Sails/Informe/Images/sails22.png">
</p>

<br>
<a href="#Cabecera">Cabecera</a>