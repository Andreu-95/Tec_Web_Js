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
    * <a href="#Small">Etiqueta Small</a>
    * <a href="#Code">Etiqueta Code</a>
    * <a href="#KBD">Etiqueta KBD</a>
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
<br>
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
<br>
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



