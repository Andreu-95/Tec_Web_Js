# Introducción a la Web

### Materia: `Tecnologías Web con Javascript`
### Tema: `Introducción a CSS`
### Fecha: `2016-11-01`
### Estudiante: `Andrés David Guerra Vásconez`
### Profesor: `Adrián Eguez`
### Número de Informe: `2`

<a name="Cabecera"></a>
## Índice de Contenidos
- <a href="#Tema">Tema</a>
- <a href="#Objetivos">Objetivos</a>
- <a href="#MarcoTeorico">Marco Teórico</a>
    * <a href="#DefinicionCSS">Definición CSS</a>
    * <a href="#ConceptosCSS">Conceptos Básicos CSS</a>
- <a href="#Desarrollo">Desarrollo de la Práctica</a>
    * <a href="#CSS">CSS dentro de HTML</a>
    * <a href="#HojasEstilo">Hojas de Estilo</a>
    * <a href="#Bootstrap">Bootstrap Básico</a>
- <a href="#ConRec">Conclusiones y Recomendaciones</a>

<a name="Tema"></a>
## Tema
Tema de la Práctica: `Introducción a CSS.`

<a name="Objetivos"></a>
## Objetivos
- Aprender los conceptos básicos sobre el lenguaje CSS.
- Crear hojas de estilo para usar en conjunto con CSS.
- Aprender el uso básico de Bootstrap.

<a name="MarcoTeorico"></a>
## Marco Teórico
<a name="DefinicionCSS"></a>
### Definición CSS
Hojas de estilo en cascada (o CSS, siglas en inglés de Cascading Stylesheets) es un lenguaje de hojas de estilo para definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado . Es muy usado para establecer el diseño visual de las páginas web, e interfaces de usuario escritas en HTML o XHTML; el lenguaje puede ser aplicado a cualquier documento XML, incluyendo XHTML, SVG, XUL, RSS, etcetera. También permite aplicar estilos no visuales, como las hojas de estilo auditivas. (Fuente: [Wikipedia](https://es.wikipedia.org/wiki/Hoja_de_estilos_en_cascada))
<br>
<a href="#Cabecera">Cabecera</a>

<br>
<a name="ConceptosCSS"></a>
### Conceptos Básicos CSS
#### Hojas de Estilo
Las hojas de estilo (style sheets) son conjuntos de instrucciones, a veces en forma de archivo anexo, que se asocian a los archivos de texto y se ocupan de los aspectos de formato y de presentación de los contenidos: tipo, fuente y tamaño de letras, alineación y posicionamiento del texto, colores y fondos, etc. Las hojas de estilo permiten liberar la composición del texto de los aspectos visuales y favorecen que se estructure y anote mediante códigos que permiten un tratamiento más eficaz de los contenidos. (Fuente: [Wikipedia](https://es.wikipedia.org/wiki/Hoja_de_estilo))

#### Bootstrap
Es un framework o conjunto de herramientas de Código abierto para diseño de sitios y aplicaciones web. Contiene plantillas de diseño con tipografía, formularios, botones, cuadros, menús de navegación y otros elementos de diseño basado en HTML y CSS, así como, extensiones de JavaScript opcionales adicionales. (Fuente: [Wikipedia](https://es.wikipedia.org/wiki/Twitter_Bootstrap))

#### CSS Combinators
Un combinador es algo que explica la relación entre los selectores. Estos se incluyen entre los selectores simples.
<br>
Existen 4 tipos diferentes de combinadores:
- Selector descendente (espacio).
- Selector de hijo (>).
- Selector de hermano adyacente (+).
- Selector de hermano general (~).
(Fuente: [W3Schools](http://www.w3schools.com/css/css_combinators.asp))

#### Box Model
Todos los elementos en HTML pueden ser considerados como cajas. En CSS, el término "modelo de cajas" es utilizado cuando hablamos del diseño y del entorno. En CSS, este modelo es esencialmente una caja que envuelve cada elemento HTML.
<br>
Entre sus partes tenemos:
- Content: El contenido de una caja, donde aparecen texto e imágenes.
- Padding: Limpia un área alrededor del contenido; es transparente.
- Border: Un borde que va alrededor del relleno y el contenido.
- Margin: Limpia un área alrededor del borde; es transparente.
(Fuente: [W3Schools](http://www.w3schools.com/css/css_boxmodel.asp))

#### CSS Pseudo-classes
Son usadas para definir el estado especial de un elemento.
<br>
Puede ser usada para:
- Estilizar un elemento cuando el usuario pasa su mouse sobre el.
- Estilizar links vistados y no visitados de manera diferente.
- Estilizar un elemento cuando es enfocado.
(Fuente: [W3Schools](http://www.w3schools.com/css/css_pseudo_classes.asp))

#### CSS Pseudo-elements
Son usados para estilizar partes específicas de un elemento.
<br>
Puede ser usado para:
- Estilizar la primera letra, o línea, de un elemento.
- Insertar contenido antes, o después, del contenido de un elemento.
(Fuente: [W3Schools](http://www.w3schools.com/css/css_pseudo_elements.asp))

#### CSS Attribute Selectors
Es posible estilizar elementos de HTML que tienen atributos o valores específicos de estos.
<br>
Entre sus diferentes formas tenemos:
- `[attribute]`: usado para seleccionar elementos con un atributo específico.
- `[attribute="value"]`: usado para seleccionar elementos con un atributo y valor específico.
- `[attribute~="value"]`: usado para seleccionar elementos con el valor de un atributo que contenga una palabra en específico.
- `[attribute|="value"]`: usado para seleccionar elementos con el atributo específico iniciando con el valor especificado.
- `[attribute^="value"]`: usado para seleccionar elementos cuyo valor de un atributo empiece con el valor especificado.
- `[attribute$="value"]`: usado para seleccionar elementos cuyo valor de un atributo termine con el valor especificado.
- `[attribute*="value"]`: usado para seleccionar elementos cuyo valor de un atributo contenga el valor especificado.
(Fuente: [W3Schools](http://www.w3schools.com/css/css_attribute_selectors.asp))

#### CSS Forms
Con CSS, una forma HTML puede ser bastante mejor, entre sus aplicaciones tenemos:
- Indicar el tamaño de la forma.
- Rellenarla con espacios vacíos.
- Colocarle un borde a las formas.
- Colocarle un color de fondo a las formas.
- Hacer que cambie su estilo cuando es enfocada.
- Colocarle un icono o una imagen.
- Colocarle una animación.
- Estilizar áreas de texto.
- Estilizar menús de selección.
- Estilizar botones de entrada.
(Fuente: [W3Schools](http://www.w3schools.com/css/css_form.asp))

#### CSS Counters
Son variables mantenidas por CSS cuyos valores pueden ser incrementados mediante reglas CSS. Con esto es posible ajustar la apariencia del contenido basado en su localización en el documento.
<br>
Para trabajar con ellos podemos usar:
- `counter-reset`: Crea o reinicia un contador.
- `counter-increment`: Incrementa el valor de un contador.
- `content`: Inserta contenido generado.
- `counter()` - `counters()`: Añade el valor de un contador a un elemento.
(Fuente: [W3Schools](http://www.w3schools.com/css/css_counters.asp))

#### CSS3 Transitions
Las transiciones nos permiten cambiar los valores de propiedad suavemente, en un intervalo de tiempo.
<br>
Para usar una transición, se deben especificar dos cosas:
- La propiedad CSS a la cual se quiere añadir el efecto.
- La duración del efecto.
(Fuente: [W3Schools](http://www.w3schools.com/css/css3_transitions.asp))

#### CSS3 Animations
Las animaciones nos permiten animar elementos de HTML sin la necesidad de usar JavaScript o Flash.
<br>
Una animación permite que un elemento cambie gradualmente de un estado a otro. Se pueden cambiar tantas propiedades de CSS como se quieran, las veces que se quieran. Para usarlas, es necesario especificar algunos marcos clave para la animación. Estos marcos guardan que estilos tendrán los elementos en tiempos específicos.
(Fuente: [W3Schools](http://www.w3schools.com/css/css3_animations.asp))

#### CSS3 2D Transforms
Las transformaciones en 2D nos permiten trasladar, rotar, escalar y sesgar elementos. Una transformación es un efecto que permite que un elemento cambie su forma, tamaño y posición. 
<br>
Entre las transformaciones 2D tenemos:
- `translate()`.
- `rotate()`.
- `scale()`.
- `skewX()`.
- `skewY()`.
- `matrix()`.
(Fuente: [W3Schools](http://www.w3schools.com/css/css3_2dtransforms.asp))

#### CSS3 3D Transforms
Las transformaciones 3D nos permiten formatear elementos.
<br>
Entre las transformaciones 3D tenemos:
- `rotateX()`.
- `rotateY()`.
- `rotateZ()`.
(Fuente: [W3Schools](http://www.w3schools.com/css/css3_3dtransforms.asp))
<br>
<a href="#Cabecera">Cabecera</a>

<a name="Desarrollo"></a>
## Desarrollo de la Práctica
<a name="CSS"></a>
### CSS dentro de HTML
Para usar código CSS dentro de HTML, es necesario utilizar la etiqueta `<style>`. Dentro de esta, colocamos las propiedades CSS con el siguiente formato: `NombreTag { Propiedad:valorPropiedad; .. }`.
```html
<style>
    html {
        background-color: crimson;
    }
    
    body {
        background-color: aqua;
    }
    
    h1 {
        background-color: firebrick;
    }
        
    p {
        background-color: chartreuse;
    }
</style>
```
<p align="center">
    <img src="https://raw.githubusercontent.com/Andreu-95/Tec_Web_Js/02-CSS/Informe/Images/css.png" width="1000">
</p>

<br>
También podemos crear nuestras propias clases para usarlas dentro de las etiquetas de HTML. Las clases tienen el siguiente formato: `.nombreClase {}`. Para colocarlas dentro de la etiqueta, colocamos `class="nombreClase"`.
```html
<style>        
    .nombreClaseRojo {
        background-color: red;
    }
    
    .nombreClaseAzul {
        background-color: blue;
    }
        
    .nombreClaseAmarillo {
        background-color: yellow;
    }
</style>
```
```html
<p class="nombreClaseRojo">Párrafo Rojo</p>
<h1 class="nombreClaseAmarillo">Amigos</h1>
<p class="nombreClaseAzul">Párrafo Azul</p>
<h1>Politécnicos</h1>
<p class="nombreClaseAmarillo">Párrafo Amarillo</p>
<p>Último Párrafo sin Clase</p>
```
<p align="center">
    <img src="https://raw.githubusercontent.com/Andreu-95/Tec_Web_Js/02-CSS/Informe/Images/css2.png" width="1000">
</p>

<br>
Podemos indicar el estilo también por ID. Para ello declaramos el estilo con el siguiente formato: `#nombreID {}`. Para usarlos en las etiquetas colocamos `id="nombreID"`.
```html
<style>        
    #parrafoVerde {
        background-color: deeppink;
    }
</style>
```
```html
<p id="parrafoVerde" class="nombreClaseAmarillo">Párrafo Amarillo</p>
```
<p align="center">
    <img src="https://raw.githubusercontent.com/Andreu-95/Tec_Web_Js/02-CSS/Informe/Images/css3.png" width="1000">
</p>

<br>
Gracias a HTML5 podemos declarar etiquetas con cualquier nombre lo que nos permite crear estilos para las mismas con CSS.
```html
<style>        
    cualquiera {
        background-color: cornflowerblue;
    }
</style>
```
```html
<cualquiera>Hola</cualquiera>
```
<p align="center">
    <img src="https://raw.githubusercontent.com/Andreu-95/Tec_Web_Js/02-CSS/Informe/Images/css4.png" width="1000">
</p>
<br>
<a href="#Cabecera">Cabecera</a>

<a name="HojasEstilo"></a>
### Hojas de Estilo
Para no llenar nuestra página de tanto código CSS, podemos crear archivos conocidos como hojas de estilo, en donde pondremos todo nuestro código CSS para llamarlo y cargarlo desde HTML mediante la etiqueta `<link rel="stylesheet" href="">`. Es importante tener en cuenta que las hojas de estilo deben estar mínimo, al mismo nivel que el lugar en donde se levantó el servidor.
```html
<link rel="stylesheet" href="estilos.css">
```
```css
/* estilos.css */
html {
    background-color: crimson;
}
  
body {
    background-color: aqua;
}
  
h1 {
    background-color: firebrick;
}
  
p {
    background-color: chartreuse;
}
  
cualquiera {
    background-color: cornflowerblue;
}
  
.nombreClaseRojo {
    background-color: red;
}
  
.nombreClaseAzul {
    background-color: blue;
}
  
.nombreClaseAmarillo {
    background-color: yellow;
}
  
#parrafoVerde {
    background-color: deeppink;
}
```
<p align="center">
    <img src="https://raw.githubusercontent.com/Andreu-95/Tec_Web_Js/02-CSS/Informe/Images/hojas.png" width="1000">
</p>

<br>
Podemos colocar varias hojas de estilo en un mismo HTML, sin embargo, si los estilos se cruzan, la página utilizará los últimos que se carguen.
```html
<link rel="stylesheet" href="estilos.css">
<link rel="stylesheet" href="estilos2.css">
<link rel="stylesheet" href="estilos3.css">
```
<br>
<a href="#Cabecera">Cabecera</a>

<a name="Bootstrap"></a>
### Bootstrap
Bootstrap nos provee una hoja de estilos, con varias propiedades ya creadas. Para usarlas, solo tenemos que cargar la hoja en nuestra página HTML y llamar a los estilos como clases.
```html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
```
<br>
Algo notable de Bootstrap, es que se preocupa de la relación que existe entre el tamaño de la pantalla y los elementos de la página. Para ajustar esta relación podemos usar esto:
```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```
<br>
Para probar las clases de Bootstrap, vamos a crear varias tablas. Es importante tener en cuenta que las tablas ocupan 12 espacios, los cuales se usan para dividir a la tabla por el número de columnas y el tamaño de estas. Para las tables usaremos las clases `container`, `row`, `col-md-x`, `col-sm-x`, `col-lg-x` y `col-x-s`.
<br><br>
Para utilizar dos clases en una misma etiqueta, simplemente colocamos la primera seguida de la segunda: 
<br>
`class="clase1 clase2"`.
```html
<h1>Hola</h1>
<div class="container" style="background-color:yellow">
    <h1>Hola</h1>
    <div class="row" style="background-color:green">
        <h1>Fila 1</h1>
        <div class="col-md-4 borde">
            <h2>Columna md 4 - 1</h2>
        </div>
        <div class="col-md-4 borde">
            <h2>Columna md 4 - 2</h2>
        </div>
        <div class="col-md-4 borde">
            <h2>Columna md 4 - 3</h2>
        </div>
    </div>
    <div class="row" style="background-color:blue">
        <h1>Fila 2</h1>
        <div class="col-sm-3 borde">
            <h3>CSM3-1</h3>
        </div>
        <div class="col-sm-3 borde">
            <h3>CSM3-2</h3>
        </div>
        <div class="col-sm-3 borde">
            <h3>CSM3-3</h3>
        </div>
        <div class="col-sm-3 borde">
            <h3>CSM3-4</h3>
        </div>
    </div>
    <div class="row" style="background-color:red">
        <h1>Fila 3</h1>
        <div class="col-lg-6 borde">
            <h3>CLG6-1</h3>
        </div>
        <div class="col-lg-6 borde">
            <h3>CLG6-2</h3>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-2 borde">
            <h2>CXS2-1</h2>
        </div>
        <div class="col-xs-5 borde">
            <h2>CXS5-1</h2>
        </div>
        <div class="col-xs-5 borde">
            <h2>CXS5-2</h2>
        </div>
    </div>
</div>
```
<p align="center">
    <img src="https://raw.githubusercontent.com/Andreu-95/Tec_Web_Js/02-CSS/Informe/Images/boot.png" width="1000">
</p>
<br>
<a href="#Cabecera">Cabecera</a>

<a name="ConRec"></a>
## Conclusiones y Recomendaciones
- Con CSS podemos mejorar de gran manera el apartado visual de nuestras páginas HTML, ya que la personalización es bastante amplia debido a las muchas características con las que cuenta este lenguaje.
- Bootstrap nos sirve de plantilla de estilos para usarlos en nuestra página HTML, con ello se ahorra bastante tiempo al no tener que estar creando algo que ya está hecho, simplemente debemos conocer que es lo que queremos usar de nuestra plantilla de Bootstrap.
- Se recomienda siempre usar CSS en conjunto con HTML para mejorar la presentación de nuestras páginas.
- Se recomienda analizar siempre la relación de tamaño que exista entre los elementos y la pantalla para que así nuestra página se vea bien sin importar el tamaño.

<br>
<a href="#Cabecera">Cabecera</a>