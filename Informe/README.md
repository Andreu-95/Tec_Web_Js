# Introducción a la Web

### Materia: `Tecnologías Web con Javascript`
### Tema: `Bootstrap: Sitios Web`
### Fecha: `2016-11-08`
### Estudiante: `Andrés David Guerra Vásconez`
### Profesor: `Adrián Eguez`
### Número de Informe: `3`

<a name="Cabecera"></a>
## Índice de Contenidos
- <a href="#Tema">Tema</a>
- <a href="#Objetivos">Objetivos</a>
- <a href="#MarcoTeorico">Marco Teórico</a>
    * <a href="#Diseño">Diseño Web</a>
    * <a href="#Calidad">Calidad Web</a>
    * <a href="#WAI">WAI Web</a>
    * <a href="#Validacion">Validación Web</a>
    * <a href="#SEO">SEO Web</a>
- <a href="#Desarrollo">Desarrollo de la Práctica</a>
    * <a href="#Etiquetas">Etiquetas small, code, kbd</a>
    * <a href="#Tablas">Tablas con Bootstrap</a>
    * <a href="#Formularios">Formularios con Bootstrap</a>
- <a href="#ConRec">Conclusiones y Recomendaciones</a>

<a name="Tema"></a>
## Tema
Tema de la Práctica: `Bootstrap: Sitios Web.`

<a name="Objetivos"></a>
## Objetivos
- Aprender los estándares básicos que debe cumplir un sitio web.
- Aprender nuevas etiquetas que nos permiten dar un mejor estilo visual a la página.
- Utilizar Bootstrap para la creación de Tablas y Formularios.

<a name="MarcoTeorico"></a>
## Marco Teórico
<a name="Diseño"></a>
### Diseño Web
#### Los usuarios son scanners.
No importa que tanta información útil se coloque en una página web, un visitante solo se tomará unos segundos para revisarla antes de decidir si se queda o se va. Es importante asegurarse de que el punto del tema esté en la primera oración de la página. Después, se debe mantener al usuario ocupado con párrafos cortos y nuevas cabeceras mientras baja por la página.
#### Menos es más.
Se debe mantener los párrafos, páginas y capítulos tan pequeños como sea posible. Es importante utilizar mucho espacio, sin sobrecargar al usuario con demasiado texto. Si es mucho lo que se debe escribir, es bueno partirlo en secciones y colocarlo en varias páginas.
#### Navegación.
Es importante crear una estructura de navegación consistente que se repita a lo largo de las páginas. No es recomendable colocar enlaces dentro de un párrafo, de ser necesarios se deben colocar al final del párrafo o en un menú.
#### Velocidad de Descarga.
Se debe tener en cuenta el tiempo que toma en cargar una página. Si la página toma más de 7 segundos en cargar, el usuario saldrá de esta. Si es mucho el tiempo que se demora se debe remover contenidos gráficos o multimedia.
#### Deja que tu audiencia hable.
La retroalimentación que pueden proveer los usuarios es una buena forma de darse cuenta de las cosas que se pudieron haber hecho mejor. Se debe colocar una manera sencilla para que los usuarios nos contacten.
#### Pantalla del visitante.
No todos los visitantes tendrán el mismo monitor, por ello se debe probar la página en varias resoluciones para observar si existe algún tipo de problema.
#### ¿Qué navegadores utilizan?
Es importante tener en cuenta el navegador del usuario, se debe probar la página en los diferentes navegadores que sean más populares. Una forma de evitar conflictos es tener un buen código HTML.
#### ¿Qué complementos utilizan?
Varios contenidos como sonidos, videos u otros, pueden requerir un complemento en específico para ser observados. Es importante asegurarse de que los usuarios podrán tener acceso a estos complementos.
#### Acerca de las discapacidades.
Algunos usuarios tendrán discapacidades visuales o auditivas, por lo que utilizarán buscadores especializados para ellos. Siempre se debe añadir texto alternativo para imágenes y gráficos.
<br>
<a href="#Cabecera">Cabecera</a>

<a name="Calidad"></a>
### Calidad Web
#### Usar HTML5.
Escribir las páginas con HTML5 permite que la página tenga un buen diseño. Es importante colocar la etiqueta `<!DOCTYPE html>`, con esto el navegador puede renderizar la página más rápido y permite que un software de validación verificar la sintáxis de la página.
#### Usar archivos CSS separados.
Con CSS podemos separar estilos de contenidos, lo que nos permite un mejor manejo de nuestra página, reduciendo costos de desarrollo. Además, de ser necesario, cambiar algún estilo, solamente debe hacerse una vez.
#### Validación Web.
Un software puede validar si una página web sigue los estándares apropiados. De no hacerlo, muestra donde se encuentran los errores.
#### El elemento título.
El título de una página web es importante porque:
- Será visible en las listas de búsqueda.
- Es visible en las pestañas del navegador.
- Se mostrará en los marcadores del usuario.

Por ello el título deberá ser, tan corto y descriptivo como sea posible. El título debe concordar con el contenido de la página.
#### Elementos de cabecera.
Existen varios niveles de cabeceras para usar. La cabecera `<h1>` debe ser utilizada para cabeceras principales, `<h2>` y `<h3>` para cabeceras de menor nivel. Con esto, evitamos problemas al momento de querer entender la jerarquía.
#### Conjunto de caractetes.
El conjunto de caracteres actualmente usado se conoce como Unicode. Sin embargo, no todos lo utilizan. Por ello, es imporante que tanto el servidor como el navegador estén de acuerdo en el conjunto de caracteres a usar. Para eso está la etiqueta `<meta charset="">`.
#### Formato de Fechas.
La ISO, define el formato de fechas de la siguiente manera: "yyyy-mm-dd". Así se evitan problemas de comprensión cuando se colocan fechas.
<br>
<a href="#Cabecera">Cabecera</a>

<a name="WAI"></a>
### WAI Web
WAI es un conjunto de guías, para que desarrolladores web, creen páginas que sean más asequibles para personas con discapacidades. Con esto se logra:
- Mejorar la reputación de la página y la satisfacción del cliente.
- Aumentar el número de visitas.
- Hacer que los visitantes se queden más en la página.
- Hacer que la página pueda ser usada por personas con equipos viejos.

#### Recordar "alt".
Existen varias razones por las cuales un navegador no mostrará una imagen, puede ser porque el usuario las desactivó, el navegador no tiene la capacidad para mostrarla o es un navegador por voz. Con el atributo `alt` el navegador mostrará el texto que se le coloque.
#### No usar fuentes pequeñas.
Algunas veces, las fuentes pequeñas son utilizadas para poder colocar más texto en un solo lugar o para darle más "estilo". Esto puede causar problemas a ciertos usuarios por lo que es mejor utilizar fuentes con un tamaño de letra adecuado.
#### Escoger el mejor espaciado de letra y de línea.
Los textos con un mayor espaciado de letra y de línea son más fáciles de leer.
#### Evitar fuentes lujosas.
Los textos normales son más fáciles de leer que textos en cursiva o serif.
#### Evitar malos contrastes de color.
Texto negro en un fondo blanco o viceversa, es mejor para gente con discapacidades o aquellas que no tengan un buen equipo. Existen varias combinaciones por probar, se deben evitar aquellas que no generen un buen contraste o que sean molestas para la vista.
#### Siempre colocar un color de fondo.
Los usuarios tienen la capacidad de modificar las preferencias de color por defecto. Por ello, si se colocan colores a los elementos, se debería hacer lo mismo para el fondo.
<br>
<a href="#Cabecera">Cabecera</a>

<a name="Validacion"></a>
### Validación Web
Un software puede validar si una página web sigue los estándares apropiados. De no hacerlo, muestra donde se encuentran los errores. En W3Schools, podemos validar HTML, CSS, XHTML Y XML.
<br>
<a href="#Cabecera">Cabecera</a>

<a name="SEO"></a>
### SEO Web
La optimización de motores de búsqueda es el proceso de mejorar el ranking o visibilidad de una página web en los motores de búsqueda. Mientras mayor sea la frecuencia con la que un sitio es mostrado en un motor de búsqueda, como Google, entonces se espera que reciba un mayor número de visitas.
<br><br>
SEO considera como trabajan los motores de búsqueda, que busca la gente, y que términos de búsqueda se utilizan. Para optimizar un sitio, este puede ser modificado para aumentar su relevancia a palabras específicas. También puede ser promocionado.
<br><br>
Un buen SEO puede requerir cambios al código HTML y al contenido en general. Durante el desarrollo de la página se debe tener muy presente el SEO especialmente en los menús y la estructura de navegación.
<br><br>
Los sitios web añaden automáticamente nuevos sitios a su índice de búsqueda. Sin embargo, un sitio nuevo y desconocido puede tomar algún tiempo en entrar. Por ello, varios motores de búsqueda invitan a que envién los nuevos sitios web.
<br>
<a href="#Cabecera">Cabecera</a>

<a name="Desarrollo"></a>
## Desarrollo de la Práctica
<a name="Etiquetas"></a>
### Etiquetas small, code, kbd.
- Con la etiqueta `<small>` hacemos que el texto se vea más pequeño y un poco más claro hacia el usuario.
- Con la etiqueta `<code>` hacemos quel texto se visualice como si fuera código, con `&lt` y `&gt` colocamos '<' y '>' respectivamente.
- Con la etiqueta `<kbd>` hacemos que el texto se asemeje a la entrada de un usuario.

```html
<h1>Mi título <small>este texto es más claro</small></h1>

<h2>Mi ejemplo de código</h2>
<p>El tag para describir imágenes es: <code>&lt;img&gt;</code></p>

<h2>User inputs con Bootstrap</h2>
<p>No está permitido por ejemplo el <kbd>ctrl</kbd>+<kbd>c</kbd> ni el <kbd>ctrl</kbd>+<kbd>v</kbd></p>
```
<p align="center">
    <img src="https://raw.githubusercontent.com/Andreu-95/Tec_Web_Js/03-Bootstrap/Informe/Images/tag1.png">
</p>
<br>
<a href="#Cabecera">Cabecera</a>

<a name="Tablas"></a>
### Tablas con Bootstrap
Para crear tablas usamos la etiqueta `<table>`, dentro de esta, indicamos las filas con la etiqueta `<tr>`, las cabeceras con la etiqueta `<th>` y los elementos con la etiqueta `<td>`.
```html
<table>
    <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
    </tr>
    <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
    </tr>
    <tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>mary@example.com</td>
    </tr>
    <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>july@example.com</td>
    </tr>
</table>
```
<p align="center">
    <img src="https://raw.githubusercontent.com/Andreu-95/Tec_Web_Js/03-Bootstrap/Informe/Images/table1.png">
</p>
<br>
Gracias a Bootstrap podemos darle estilos a nuestras tablas, como hacer que estas sean a rayas, con borde, que cambien su color cuando son enfocadas, o que ocupen menos espacio. También podemos cambiar el color de las filas o celdas con las clases de Bootstrap.

#### Tabla a rayas.
```html
<table class="table table-striped">
    <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
    </tr>
    <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
    </tr>
    <tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>mary@example.com</td>
    </tr>
    <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>july@example.com</td>
    </tr>
</table>
```
<p align="center">
    <img src="https://raw.githubusercontent.com/Andreu-95/Tec_Web_Js/03-Bootstrap/Informe/Images/table2.png" width="1000">
</p>

#### Tabla con borde
```html
<table class="table table-bordered">
    <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
    </tr>
    <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
    </tr>
    <tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>mary@example.com</td>
    </tr>
    <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>july@example.com</td>
    </tr>
</table>
```
<p align="center">
    <img src="https://raw.githubusercontent.com/Andreu-95/Tec_Web_Js/03-Bootstrap/Informe/Images/table3.png" width="1000">
</p>

#### Tabla con enfoque
```html
<table class="table table-hover">
    <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
    </tr>
    <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
    </tr>
    <tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>mary@example.com</td>
    </tr>
    <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>july@example.com</td>
    </tr>
</table>
```
<p align="center">
    <img src="https://raw.githubusercontent.com/Andreu-95/Tec_Web_Js/03-Bootstrap/Informe/Images/table4.png" width="1000">
</p>

#### Tabla condensada y con colores
```html
<table class="table table-condensed">
    <tr class="active">
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
    </tr>
    <tr class="success">
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
    </tr>
    <tr class="info">
        <td>Mary</td>
        <td>Moe</td>
        <td>mary@example.com</td>
    </tr>
    <tr class="warning">
        <td>July</td>
        <td>Dooley</td>
        <td>july@example.com</td>
    </tr>
</table>
```
<p align="center">
    <img src="https://raw.githubusercontent.com/Andreu-95/Tec_Web_Js/03-Bootstrap/Informe/Images/table5.png" width="1000">
</p>
<br>
<a href="#Cabecera">Cabecera</a>

<a name="Formularios"></a>
### Formularios con Bootstrap
Con Bootstrap también podemos utilizar formularios que tengan un estilo en específico. Solamente debemos indicar a que clase pertenecen y añadirle los complementos necesarios para su funcionamiento.
```html
<div class="container">
    <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <div class="input-group">
                        <div class="input-group-addon">:v</div>
                        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
                        <div class="input-group-addon">v:</div>
                    </div>
                </div>
                <button type="submit" class="btn btn-default">Submit</button>
            </form>
        </div>
        <div class="col-sm-3"></div>
    </div>
</div>
```
<p align="center">
    <img src="https://raw.githubusercontent.com/Andreu-95/Tec_Web_Js/03-Bootstrap/Informe/Images/form1.png">
</p>
<br>
<a href="#Cabecera">Cabecera</a>