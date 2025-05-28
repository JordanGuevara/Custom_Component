# Proyecto Web Components: Tarjeta de Usuario y Formulario Dinámico

## Objetivo  
Este proyecto tiene como finalidad crear una tarjeta de usuario reutilizable utilizando Web Components, junto con un formulario que permita modificar dinámicamente los datos mostrados en dicha tarjeta. La idea es aplicar conceptos de componentes personalizados, encapsulamiento y manejo de slots para construir una interfaz modular, fácil de mantener y extender.

---

## Estructura del proyecto

- **index.html**  
  Archivo principal que contiene la estructura base de la página. Aquí se integran los componentes personalizados:  
  - `<formulario-accion>`: Componente que contiene botones para cambiar dinámicamente el nombre y el párrafo de la tarjeta de usuario.  
  - `<espe-modal>`: Componente modal que muestra el contenido pasado en su slot "contenido".  
  - `<card-user>`: Componente que representa la tarjeta de usuario, con slots para personalizar el título, nombre y texto.

- **app.js**  
  Archivo JavaScript que centraliza la importación y configuración de los componentes, facilitando la organización del código.

- **Componentes**  
  - `card-user`: Define la estructura visual de la tarjeta de usuario, utilizando slots para insertar contenido personalizado desde fuera.  
  - `formulario-accion`: Permite cambiar los datos del componente `card-user` a través de botones que disparan acciones.  
  - `espe-modal`: Un componente modal reutilizable que encapsula su contenido en un Shadow DOM, y que se controla mediante métodos públicos como `abrir()` para mostrarlo.

---

## Funcionamiento general

Al cargar la página, se muestra un formulario con dos botones que permiten modificar el contenido dentro de la tarjeta de usuario. Esta tarjeta está encapsulada dentro de un modal (`espe-modal`) que permanece oculto hasta que se invoca su método `abrir()` mediante un botón externo. Al hacer clic en “Mostrar Modal”, el modal aparece con la tarjeta y su contenido personalizado. Los datos del usuario (como el nombre y el texto descriptivo) pueden actualizarse dinámicamente gracias a la comunicación entre componentes a través de slots y eventos.

---

## Autor  
**Jordan Guevara**  
Fecha: 2025-05-17
