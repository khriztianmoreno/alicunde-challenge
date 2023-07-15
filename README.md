# alicunde-challenge
Prueba tecnica offline



## Ejercicio 1. Añadir y eliminar elementos de una lista (React)

Requisitos:

- Tener instalado Nodejs (v16.x.x o superior). Tener instalado npm.
- Duración máxima: 40 minutos

Enunciado: Crear una app en React que implemente un campo de texto y botón para añadir un elemento. Cuando se hace click en el botón, el texto en el campo de entrada debe agregarse a continuación en una lista de elementos. Además, cada vez que se hace click en cualquier elemento de la lista, debe eliminarse de la lista.

Dar importancia a la funcionalidad y usabilidad, más que al diseño visual.
El código debe ser enteramente desarrollado en Typescript.

## Ejercicio 2. API REST (Nodejs)


Requisitos:
- Tener instalado Nodejs (v16.x.x o superior). Tener instalado npm.
- Duración máxima: 40 minutos

Enunciado:

Crear una API REST en Node.js que gestione Libros y Autores. Se deben crear 2 endpoints para operar con la misma. Se puede usar almacenamiento en memoria o el sistema gestor de bases de datos de su preferencia.

### Entidad Libro (book):
- id: number
- title: string
- chapters: number. Representa la cantidad de capítulos.
- pages: number. Representa la cantidad de páginas.


### Entidad Autor (author):
- id: number
- name: string

Debe existir una relación del tipo Many-to-Many entre los libros y los autores

Endpoints:

- Nuevo Libro: Creará un nuevo libro, aportando todos sus datos incluidos los autores.
- Obtener todos los libros: Deberá devolver un listado de libros con sus autores.
- Crear un autor: Creará un nuevo autor
- Obtener todos los autores: Deberá devolver un listado de todos los autores con los libros que tengan.
- Obtener Promedio de Páginas por Capítulo: Obtener el dato de una instancia de Libro ya creada. Se debe devolver el id del libro consultado y un promedio de páginas por capítulo. Ambos en formato cadena, y con 2 decimales para el promedio.


Para la prueba es necesario realizar lo que dicta el enunciado, aunque se pueden agregar características no mencionadas (manejo de errores, repositorio de datos, validaciones, etc.).
Se pueden asumir los aspectos que no aclare el enunciado, y realizar aclaraciones personales en caso de ser necesario.
El código debe ser enteramente desarrollado en Typescript. 
