### Instalación

npm install -g sails
npm install --save nodemailer

### Crear proyecto

sails new NombreProyecto

### Levantar Servidor

sails lift

node app.js

### Modos

- 1:SafeMode no se altera la base de datos
- 2:AlterMode se altera la base si se hace algún cambio al modelo
- 3:DeleteMode borra todos los dtos de la base y vuelve a crear los modelos

### Servidor

Servidor Web
Se encuentra en la carpeta assets

Crear carpeta app: index.html, estilos.css, script.js

### Vistas

Modificar ejs

### Generar controladores

sails generate controller nombreControlador

### Generar api

sails generate api nombreApi

### Generar modelo

sails generate model nombreModelo

### Blueprint Shortcuts
http://localhost:1337/Usuario/create?=nombres=Andrés&apellidos=Guerra
http://localhost:1337/Usuario/destroy/5
http://localhost:1337/Usuario/update/6?nombres=Andres