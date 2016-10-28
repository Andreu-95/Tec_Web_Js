# Introducción a la Web

### Materia: `Tecnologías Web con Javascript`
### Tema: `Introducción a la Web`
### Fecha: `2016-10-28`
### Estudiante: `Andrés David Guerra Vásconez`
### Profesor: `Adrián Eguez`
### Número de Informe: `1`

<a name="Cabecera"></a>
## Índice de Contenidos
- <a href="#Tema">Tema</a>
- <a href="#Objetivos">Objetivos</a>
- <a href="#MarcoTeorico">Marco Teórico</a>
    * <a href="#DefinicionWWW">Definición WWW</a>
    * <a href="#DefinicionWWWC">Definición World Wide Web Consortium</a>
    * <a href="#MetodosHTTP">Métodos HTTP</a>
    * <a href="#CodigosHTTP">Códigos HTTP</a>
- <a href="#Desarrollo">Desarrollo de la Práctica</a>
    * <a href="#XML">XML</a>
    * <a href="#Doctype">Doctype</a>
    * <a href="#HTML">HTML</a>
    * <a href="#EstilosCSS">Estilos CSS</a>
    * <a href="#Inspeccionar">Herramienta Inspeccionar</a>
    * <a href="#Postman">Postman</a>
    * <a href="#NPM">Node Pack Manager (NPM)</a>
    * <a href="#Tags">Tags</a>
- <a href="#ConRec">Conclusiones y Recomendaciones</a>
    
<a name="Tema"></a>
## Tema
Tema de la Práctica: `Introducción a la Web.`

<a name="Objetivos"></a>
## Objetivos
- Aprender los conceptos sobre la Web.
- Utilizar código HTML y CSS para crear una página.
- Utilizar herramientas del navegador para analizar el funcionamiento de la página.

<a name="MarcoTeorico"></a>
## Marco Teórico
<a name="DefinicionWWW"></a>
### Definición WWW
En informática, la World Wide Web (WWW) o red informática mundial es un sistema de distribución de documentos de hipertexto o hipermedios interconectados y accesibles vía Internet. Con un navegador web, un usuario visualiza sitios web compuestos de páginas web que pueden contener texto, imágenes, vídeos u otros contenidos multimedia, y navega a través de esas páginas usando hiperenlaces. (Fuente: [Wikipedia](https://es.wikipedia.org/wiki/World_Wide_Web))
<br><br>
<a href="#Cabecera">Cabecera</a>

<br>
<a name="DefinicionWWWC"></a>
### Definición World Wide Web Consortium
El Consorcio WWW, en inglés: World Wide Web Consortium (W3C), es un consorcio internacional que genera recomendaciones y estándares que aseguran el crecimiento de la World Wide Web a largo plazo.
Este consorcio fue creado en octubre de 1994, y está dirigido por Tim Berners-Lee, el creador original del URL (Uniform Resource Locator, Localizador Uniforme de Recursos), del HTTP (HyperText Transfer Protocol, Protocolo de Transferencia de HiperTexto) y del HTML (Hyper Text Markup Language, Lenguaje de Marcado de HiperTexto), que son las principales tecnologías sobre las que se basa la Web. (Fuente: [Wikipedia](https://es.wikipedia.org/wiki/World_Wide_Web_Consortium))
<br><br>
<a href="#Cabecera">Cabecera</a>

<br>
<a name="MetodosHTTP"></a>
### Métodos HTTP
Los métodos más importates de HTTP son POST, GET, PUT, DELETE y HEAD.
##### GET
El método GET se emplea para leer una representación de un resource. En caso de respuesta positiva (200 OK), GET devuelve la representación en un formato concreto: HTML, XML, JSON o imágenes, JavaScript, CSS, etc. En caso de respuesta negativa devuelve 404 (not found) o 400 (bad request).
##### POST
Aunque se puedan enviar datos a través del método GET, en muchos casos se utiliza POST por las limitaciones de GET. En caso de respuesta positiva devuelve 201 (created).
##### PUT
Utilizado normalmente para actualizar contenidos, pero también pueden crearlos. Tampoco muestra ninguna información en la URL. En caso de éxito devuelve 201 (created, en caso de que la acción haya creado un elemento) o 204 (no response, si el servidor no devuelve ningún contenido).
##### DELETE
Simplemente elimina un resource identificado en la URI. Si se elimina correctamente devuelve 200 junto con un body response, o 204 sin body.
##### HEAD
Es idéntido a GET, pero el servidor no devuelve el contenido en el HTTP response. Cuando se envía un HEAD request, significa que sólo se está interesado en el código de respuesta y los headers HTTP, no en el propio documento. Con este método el navegador puede comprobar si un documento se ha modificado, por razones de caching. Puede comprobar también directamente si el archivo existe. (Fuente: [Diego Lázaro](https://diego.com.es/metodos-http))
<br><br>
<a href="#Cabecera">Cabecera</a>

<br>
<a name="CodigosHTTP"></a>
### Códigos HTTP
El código de respuesta o retorno es un número que indica que ha pasado con la petición. El resto del contenido de la respuesta dependerá del valor de este código. El sistema es flexible y de hecho la lista de códigos ha ido aumentando para así adaptarse a los cambios e identificar nuevas situaciones. Cada código tiene un significado concreto. Sin embargo el número de los códigos están elegidos de tal forma que según si pertenece a una centena u otra se pueda identificar el tipo de respuesta que ha dado el servidor:
- Códigos con formato 1xx: Respuestas informativas. Indica que la petición ha sido recibida y se está procesando.
- Códigos con formato 2xx: Respuestas correctas. Indica que la petición ha sido procesada correctamente.
- Códigos con formato 3xx: Respuestas de redirección. Indica que el cliente necesita realizar más acciones para finalizar la petición.
- Códigos con formato 4xx: Errores causados por el cliente. Indica que ha habido un error en el procesado de la petición a causa de que el cliente ha hecho algo mal.
- Códigos con formato 5xx: Errores causados por el servidor. Indica que ha habido un error en el procesado de la petición a causa de un fallo en el servidor. (Fuente: [Wikipedia](https://es.wikipedia.org/wiki/Hypertext_Transfer_Protocol#C.C3.B3digos_de_respuesta))
<br><br>
<a href="#Cabecera">Cabecera</a>

<a name="Desarrollo"></a>
## Desarrollo de la Práctica
<a name="XML"></a>
### XML
Antes de empezar a programar en HTML, se analizó un poco el lenguaje XML ya que ambos utilizan tags o etiquetas.
<p align="center">
    <img src="https://raw.githubusercontent.com/Andreu-95/Tec_Web_Js/01-HTML/Informe/Images/xml.png">
</p>
<br><br>
<a href="#Cabecera">Cabecera</a>

<br>
<a name="Doctype"></a>
### Doctype
Ahora se observará cual es la estructura básica del cuerpo de una página hecha con HTML, donde todo inicia con el Doctype, y las etiquetas html, head y body.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```
<br>
<a href="#Cabecera">Cabecera</a>

<br>
<a name="HTML"></a>
### HTML
Primero, se ven los diferentes tipos de cabeceras en HTML, que van desde `<h1>` hasta `<h6>`.
```html
<h1>Cabecera 1</h1>
<h2>Cabecera 2</h2>
<h3>Cabecera 3</h3>
<h4>Cabecera 4</h4>
<h5>Cabecera 5</h5>
<h6>Cabecera 6</h6>
```
<br>
<p align="center">
    <img src="https://raw.githubusercontent.com/Andreu-95/Tec_Web_Js/01-HTML/Informe/Images/html1.png">
</p>

<br>
Ahora, para insertar un párrafo podemos utilizar la etiqueta `<p>`.
```html
<h1>Caballeros del Zodiaco</h1>
<p>
    Saint Seiya (聖闘士星矢, Seinto Seiya?), conocido en español como Los Caballeros del Zodiaco, es un manga shōnen creado en 1986 por Masami Kurumada y publicado originalmente desde enero del mismo año en la revista Shūkan Shōnen Jump de la editorial Shūeisha hasta diciembre de 1990. Fue adaptado posteriormente en una serie de anime de 145 episodios. También se han producido cinco películas animadas y una película con animación CG, además de varias precuelas y secuelas oficiales de la historia original.
</p>
```
<br>
<p align="center">
    <img src="https://raw.githubusercontent.com/Andreu-95/Tec_Web_Js/01-HTML/Informe/Images/html2.png" width="800">
</p>

<br>
Para agregar una imagen a la página, utilizamos la etiqueta `<img src="">` donde dentro de src indicaremos la url de la imagen. El tamaño lo podemos cambiar con width y height.
```html
<img src="http://www.imagenes-juegos.com/saint-seiya-los-caballeros-zodiaco-soldados-valientes-imagen-i318682-i.jpg" alt="Caballeros" width="750">
```
<br>
<p align="center">
    <img src="https://raw.githubusercontent.com/Andreu-95/Tec_Web_Js/01-HTML/Informe/Images/html4.png" width="500">
</p>

<br>
Ahora, para agregar un enlance podemos utilizar la etiqueta `<a href=""></a>` donde dentro de href indicaremos la url del enlace y entre las etiquetas colocaremos o bien el texto del enlace o una imagen. Para saltos de línea utilizamos la etiqueta `<br>`.
```html
<a href="https://es.wikipedia.org/wiki/Saint_Seiya" target="_blank">Caballeros del Zodiaco Wikipedia</a>
<br><br>  
<a href="http://www.imagenes-juegos.com/saint-seiya-los-caballeros-zodiaco-soldados-valientes-imagen-i318682-i.jpg" target="_blank">
    <img src="http://www.imagenes-juegos.com/saint-seiya-los-caballeros-zodiaco-soldados-valientes-imagen-i318682-i.jpg" alt="Caballeros" width="750">
</a>
```
<br>
<p align="center">
    <img src="https://raw.githubusercontent.com/Andreu-95/Tec_Web_Js/01-HTML/Informe/Images/html3.png" width="500">
</p>

<br>
<a href="#Cabecera">Cabecera</a>

<br>
<a name="EstilosCSS"></a>
### Estilos CSS
El lenguaje CSS nos permite modificar los estilos visuales de una página en HTML. A manera de ejemplo, se cambiará el color de fondo de los elementos de la página. La estructura de un estilo es `propiedadCSS:valorPropiedadCSS;`.
```html
<head style="background-color:red;">
<p style="background-color:green">
<body style="background-color:cyan;">
```
<br>
<p align="center">
    <img src="https://raw.githubusercontent.com/Andreu-95/Tec_Web_Js/01-HTML/Informe/Images/css.png" width="800">
</p>

<br>
<a href="#Cabecera">Cabecera</a>

<br>
<a name="Inspeccionar"></a>
### Herramienta Inspeccionar
Los navegadores incluyen una herramienta que nos permite ver y modificar el código de una página web. También podemos observar los elementos de la página, el tiempo que le toma cargar a la página y demás.
<br>
<p align="center">
    <img src="https://raw.githubusercontent.com/Andreu-95/Tec_Web_Js/01-HTML/Informe/Images/ins.png">
</p>

<br>
<a href="#Cabecera">Cabecera</a>

<br>
<a name="Postman"></a>
### Postman
Postman es una extensión de Google Chrome que nos permite tener un contacto más directo con los métodos y códigos de HTTP, para poder así observar su comportamiento. Solamente debemos indicar el tipo de método y enviar una petición, con esto Postman nos detallará el resultado.
<br>
<p align="center">
    <img src="https://raw.githubusercontent.com/Andreu-95/Tec_Web_Js/01-HTML/Informe/Images/post.png">
</p>

<br>
<a href="#Cabecera">Cabecera</a>

<br>
<a name="NPM"></a>
### Node Pack Manager (NPM)
NPM es un gestor de paquetes que nos permite instalar algunas herramientas desde una ventana de comandos, para esta práctica en específico, instalaremos una que nos permita levantar un servidor.
<br>
Con el siguiente comando instalamos la herramienta: `npm install -g http-server`.
<br>
Ahora, con este comando levantamos el servidor: `http-server -c10`. Y listo, ya tenemos levantada nuestra página en localhost.
<br>
<p align="center">
    <img src="https://raw.githubusercontent.com/Andreu-95/Tec_Web_Js/01-HTML/Informe/Images/npm1.png">
</p>
<br>
<p align="center">
    <img src="https://raw.githubusercontent.com/Andreu-95/Tec_Web_Js/01-HTML/Informe/Images/npm2.png" width="800">
</p>

<br>
<a href="#Cabecera">Cabecera</a>

<br>
<a name="Tags"></a>
### Tags
Para finalizar, veremos algunas etiquetas que nos permitirán usar listas en una página en HTML.
- Para listas no ordenadas utilizamos la etiqueta `<ul>`.
- Para listas ordenadas utilizamos la etiqueta `<ol>`.
- Para incluir elementos en las listas utlizamos la etiqueta `<li>`.
```html
<h3>Listas no ordenadas</h3>
<ul>
    <li>Saint Seiya</li>
    <li>Aioria</li>
    <li>Shiryu</li>
</ul>

<h3>Listas ordenadas</h3>
<ol>
    <li>Uno</li>
    <li>Dos</li>
    <li>Tres</li>
    <li>Cuatro</li>
</ol>
```
<p align="center">
    <img src="https://raw.githubusercontent.com/Andreu-95/Tec_Web_Js/01-HTML/Informe/Images/tags.png">
</p>

<br>
<a href="#Cabecera">Cabecera</a>