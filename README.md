
![](src/imagesApp/img.gif)


 	
# COWORKING SPACES
:closed_lock_with_key: **Controla el acceso a espacios privados dentro de instalaciones de coworking, esta app te permite crear códigos de seguridad para las personas que desees que accedan.**

## ¿Por qué existe COWORKING SPACES?
**Esta app fue creada pensando en los espacios de trabajo actuales, es común encontrar multiples start-ups conviviendo en un mismo lugar, esta nueva dinámica de espacio laboral que permite la interacción también requiere de espacios que puedan ser privados por distintos motivos ya sea seguridad o almacenamiento.**

### APP :iphone:
![](src/imagesREADME/app1.jpg)
![](src/imagesREADME/app2.png)
![](src/imagesREADME/app3.jpg)

### Dispositivo en la puerta :door:

![](src/imagesREADME/puerta1.png)
![](src/imagesREADME/puerta2.png)
![](src/imagesREADME/puerta3.png)


## ¿Cómo se usa? :question:
**Usar esta app es muy sencillo :exclamation:**
<br>
**1.  Se debe descargar la app tanto en el dispositivo móvil del usuario del espacio como en el dispositivo que permitirá el acceso, es este caso el que se encontrará en la puerta.**
<br>
**2. El usuario ingresa, en la app de su dispositivo móvil, su nombre, la palabra clave de su elección y el número de seguridad que desee, al enviar estos datos la app le devolverá un código de seguridad.**
<br>
**3. EL usuario deberá ingresar en el dispositivo de acceso (la puerta) el nombre con el que previamente se registró y el código que se le proporcionó, al enviar los datos se le permitirá el acceso en caso de ser los correctos.**

<br>
<br>
<br>

## Scripts / Archivos

* `README.md`: debe explicar cómo descargar, instalar y ejecutar la aplicación
  así como una introducción a la aplicación, su funcionalidad y decisiones de
  diseño que tomaron.
* `src/index.html`: este es el punto de entrada a tu aplicación. Este archivo
  debe contener tu _markup_ (HTML) e incluir el CSS y JavaScript necesario.
* `src/cipher.js`: acá debes implementar el objeto cipher, el cual debe estar
  _exportado_ en el objeto global (`window`). Este objeto (`cipher`) debe
  contener dos métodos:
  - `cipher.encode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la derecha en el alfabeto y `string` el mensaje (texto)
    que queremos cifrar.
  - `cipher.decode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la izquierda en el alfabeto y `string` el mensaje
    (texto) que queremos descifrar.
* `src/index.js`: acá debes escuchar eventos del DOM, invocar `cipher.encode()`
  o `cipher.decode()` según sea necesario y actualizar el resultado en la UI.
* `test/cipher.spec.js`: este archivo contiene algunos tests de ejemplo y acá
  tendrás que implementar los tests(pruebas ) para `cipher.encode()` y `cipher.decode()`.
  
  <br>
 ## Estructura de Archivos
  
  
```text
./
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── cipher.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── cipher.spec.js
    ├── headless.js
    └── index.html
```
