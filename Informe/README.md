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
Primero, se ven los diferentes tipos de cabeceras en HTML, que van desde h1 hasta h6.
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