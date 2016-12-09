# Introducción a la Web

### Materia: `Tecnologías Web con Javascript`
### Tema: `Node Package Manager`
### Fecha: `2016-12-08`
### Estudiante: `Andrés David Guerra Vásconez`
### Profesor: `Adrián Eguez`
### Número de Informe: `4`

<a name="Cabecera"></a>
## Índice de Contenidos
- <a href="#Tema">Tema</a>
- <a href="#Objetivos">Objetivos</a>
- <a href="#MarcoTeorico">Marco Teórico</a>
    * <a href="#NPM">NPM</a>
- <a href="#Desarrollo">Desarrollo de la Práctica</a>
    * <a href="#Instalar">Instalar NodeJS</a>
    * <a href="#Crear">Crear un Módulo NodeJS</a>
    * <a href="#Publicar">Publicar Paquete NPM</a>
    * <a href="#Actualizar">Actualizar Paquete NPM</a>
    * <a href="#Descargar">Descargar e Instalar Paquete NPM</a>
    * <a href="#Probar">Probar Paquete Descargado</a>
- <a href="#ConRec">Conclusiones y Recomendaciones</a>

<a name="Tema"></a>
## Tema
Tema de la Práctica: `Node Package Manager.`

<a name="Objetivos"></a>
## Objetivos
- Aprender a crear un módulo NodeJS y publicarlo en la página de npm.
- Aprender a descargar e instalar paquetes NPM en nuestros proyectos.
- Aprender como usar los paquetes dentro de nuestro código y aprovechar sus funciones.

<a name="MarcoTeorico"></a>
## Marco Teórico
<a name="NPM"></a>
### NPM
NPM facilita que los desarrolladores de JavaScript compartan y reutilicen código, también hace sencilla la actualización del código que se está compartiendo.
<br>
El código reutilizable se conoce como paquete o módulo. Estos generalmente están compuestos de uno o varios archivos, que también tienen un archivo llamado "package.json" que contiene los metadatos del paquete.
<br>
La idea de esto, es que los paquetes resuelven un solo problema y lo resuelven bien. Por ello, al juntar varios de estos paquetes se puede crear una solución más completo. Todo a partir de la reutilización.
<br>
(Fuente: [NPM](https://docs.npmjs.com/getting-started/what-is-npm)).
<br>
<a href="#Cabecera">Cabecera</a>

<a name="Desarrollo"></a>
## Desarrollo de la Práctica
<a name="Instalar"></a>
### Instalar NodeJS.
Para poder utilizar npm, es necesario instalar NodeJS. Para ello, nos dirigimos a la página web de [NodeJS](https://nodejs.org/en/download/) y seleccionamos la descarga adecuada a nuestro sistema operativo.
<p align="center">
    <img src="https://raw.githubusercontent.com/Andreu-95/Tec_Web_Js/07-Node/Informe/images/node1.png" width="1000">
</p>
<br>
<a href="#Cabecera">Cabecera</a>

<a name="Crear"></a>
### Crear un Módulo NodeJS.
- Primero ejecutamos el comando `npm init` en la carpeta donde vayamos a crear nuestro módulo. Este comando creará el archivo "package.json" y nos irá pidiendo los datos para llenar el mismo.
<p align="center">
    <img src="https://raw.githubusercontent.com/Andreu-95/Tec_Web_Js/07-Node/Informe/images/npm1.png">
</p>

- El contenido de nuestra aplicación es el siguiente:
```javascript
var num1 = 5;
var num2 = 3;

console.log(num1 + num2);
```
<br>
<a href="#Cabecera">Cabecera</a>

<a name="Publicar"></a>
### Publicar Paquete NPM.
- Para publicar nuestro paquete lo que primero haremos es configurar nuestro usuario. En este caso ya lo hemos creado, así que utilizaremos el comando `npm login`.
<p align="center">
    <img src="https://raw.githubusercontent.com/Andreu-95/Tec_Web_Js/07-Node/Informe/images/npm2.png">
</p>

- Para publicar nuestro paquete, utilizamos el comando `npm publish`.
<p align="center">
    <img src="https://raw.githubusercontent.com/Andreu-95/Tec_Web_Js/07-Node/Informe/images/npm3.png">
</p>

- Efectivamente, podemos observar que el paquete ha sido publicado.
<p align="center">
    <img src="https://raw.githubusercontent.com/Andreu-95/Tec_Web_Js/07-Node/Informe/images/npm4.png">
</p>
<br>
<a href="#Cabecera">Cabecera</a>

<a name="Actualizar"></a>
### Actualizar Paquete NPM.
- Vamos a actualizar el código de nuestra aplicación a lo siguiente:
```javascript
module.exports = {
    imprimirSuma: imprimirSuma,
}

function imprimirSuma() {
    var num1 = 5;
    var num2 = 3;

    console.log(num1 + num2);
}
```

- Ahora, para actualizar nuestro paquete, utilizamos el comando `npm version patch`, con esto actualizamos la versión. Luego, hacemos nuevamente `npm publish`.
<p align="center">
    <img src="https://raw.githubusercontent.com/Andreu-95/Tec_Web_Js/07-Node/Informe/images/npm5.png">
</p>

- Comprobamos que el paquete se actualizó a la siguiente versión.
<p align="center">
    <img src="https://raw.githubusercontent.com/Andreu-95/Tec_Web_Js/07-Node/Informe/images/npm6.png">
</p>
<br>
<a href="#Cabecera">Cabecera</a>

