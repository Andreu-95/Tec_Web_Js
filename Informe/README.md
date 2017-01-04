# SAILS

### Materia: `Tecnologías Web con Javascript`
### Tema: `SAILS`
### Fecha: `2017-01-05`
### Estudiante: `Andrés David Guerra Vásconez`
### Profesor: `Adrián Eguez`
### Número de Informe: `5`

<a name="Cabecera"></a>
## Índice de Contenidos
- <a href="#Tema">Tema</a>
- <a href="#Objetivos">Objetivos</a>
- <a href="#MarcoTeorico">Marco Teórico</a>
    * <a href="#SAILS">SAILS</a>
    * <a href="#Assets">Assets</a>
    * <a href="#Vistas">Vistas</a>
    * <a href="#Rutas">Rutas</a>
    * <a href="#Controladores">Controladores</a>
    * <a href="#Pipeline">Pipeline</a>
- <a href="#Desarrollo">Desarrollo de la Práctica</a>
    * <a href="#Instalacion">Instalación Sails</a>
    * <a href="#Proyecto">Crear Proyecto Sails</a>
    * <a href="#Controlador">Crear Controlador para el Proyecto</a>
    * <a href="#API">Crear API para el Proyecto</a>
    * <a href="#Modelo">Crear Modelo para el Proyecto</a>
- <a href="#ConRec">Conclusiones y Recomendaciones</a>
    
<a name="Tema"></a>
## Tema
Tema de la Práctica: `SAILS.`

<a name="Objetivos"></a>
## Objetivos
- Aprender como instalar y utilizar SAILS para la creación de proyectos web.
- Aprender los conceptos básicos de cada una de las partes que conforman un proyecto de SAILS.
- Entender como funciona el modelo vista controlador y como hace uso SAILS del mismo.

<a name="MarcoTeorico"></a>
## Marco Teórico
<a name="SAILS"></a>
### SAILS
Sails es un framework web. Sin embargo no es un framework hecho para la parte frontal de una página Web, es decir, todo lo que se refiere a estándares como HTML5 o CSS3, estos tienen frameworks como Backbones, Angular, JQuery y demás. Si bien Sails trabaja bien con estos frameworks, no significa que pueda reemplazarlos.
<br>
Por otro lado, Sails es un framework que trabaja con la funcionalidad que ocurre por detrás de un sitio web, es decir, se aplican conceptos como REST, HTTP, WebSockets y la implementación de tecnologías como Java, Ruby, Node.js y demás. Por ello, Sails ayuda a que construyamos APIs, utilizar archivos HTML y manejar varios de usuarios.
<br>
(Fuente: [Sails.js](http://sailsjs.com/whats-that))

<br>
<a href="#Cabecera">Cabecera</a>

<br>
<a name="Assets"></a>
### Assets
Los Assets hacen referencia a los archivos estáticos, por ejemplo js, css, imágenes y demás de nuestro servidor que nosotros queremos hacerlas asequibles al resto del mundo. En Sails, estos archivos se colocan en la carpeta `assets/`. Cuando levantamos la aplicación, añadimos o cambiamos archivos de la carpeta `assets/`; el pipeline de Sails procesa y sincroniza dichos archivos en un folder oculto `.tmp/public/`.
<br>
Los contenidos de dicha carpeta son los que Sails muestra en tiempo de ejecución. Esta carpeta es equivalente a la carpeta "public" de express o a la carpeta `www/` de un servidor Apache.
<br>
(Fuente: [Sails.js](http://sailsjs.com/documentation/concepts/assets))

<br>
<a href="#Cabecera">Cabecera</a>

<br>
<a name="Vistas"></a>
### Vistas
En Sails, las vistas son plantillas que son compiladas en el servidor dentro de las páginas HTML. En la mayoría de los casos, las vistas son usadas como respuesta a una petición HTTP entrante para la página de inicio.
<br>
De manera alternativa, una vista puede ser compilada directamente dentro de una cadena HTML para ser usada en el código de adentro. Por ello, es posible usar para el envió de emails HTML, o para construir cadenas XML para usarlas en una API del legado.
<br>
(Fuente: [Sails.js](http://sailsjs.com/documentation/concepts/views))

<br>
<a href="#Cabecera">Cabecera</a>

<br>
<a name="Rutas"></a>
### Rutas
La característica más básica de una página es la habilidad de interpretar una petición enviada a una URL, para luego enviar una respuesta. Para hacer esto, la aplicación tiene que ser capaz de distinguir una URL de otra.
<br>
Como la mayoría de los framework web, Sails provee un enrutador: un mecanismo para mapear URLs a controladores y vistas. Las rutas son reglas que le dicen a Sails que hacer cuando se encuentra con una petición entrante. Existen dos tipos de rutas: personalizada y automática.
<br>
(Fuente: [Sails.js](http://sailsjs.com/documentation/concepts/routes))

<br>
<a href="#Cabecera">Cabecera</a>

<br>
<a name="Controladores"></a>
### Controladores
Los controladores son los objetos principales en una aplicación Sails que son los responsables de responder las peticiones de un navegador web, aplicación móvil o cualquier otro sistema capaz de comunicarse con un servidor. Usualmente estos actúan como un hombre en el medio entre los modelos y las vistas. Para muchas aplicaciones, los controladores contienen todo la lógica del negocio del proyecto.
<br>
(Fuente: [Sails.js](http://sailsjs.com/documentation/concepts/controllers))

<br>
<a href="#Cabecera">Cabecera</a>

<br>
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