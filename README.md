# Aplicación de E-commerce de Arcadia Technologies

## Documentación de la Aplicación

Esta documentación proporciona una descripción general de la aplicación y su funcionalidad, así como información detallada sobre los componentes, funciones y dependencias utilizadas en la aplicación.

##  Descripción General

Esta es una aplicación web de comercio electrónico full-stack construida utilizando tecnologías de React , Node.js y bases de datos en SQL Server. La aplicación permite a los usuarios registrarse, iniciar sesión, ver, crear, editar y eliminar productos tecnológicos. Además, la aplicación cuenta con un panel de administración para la gestión de productos, y utiliza varias dependencias para su funcionamiento.

## Configuración

Para configurar el proyecto, siga estos pasos:

1.  Clone o descargue el repositorio
2. Cree una base de datos llamada `marketApp` y ejecute los scripts que se encuentran en la carpeta `dbScripts` para generar y llenar las tablas necesarias con datos
3.  Vaya a la carpeta del backend y ejecute `npm install`
4.  Ejecute `npm run dev` para iniciar el servidor
5.  Vaya a la carpeta del frontend y ejecute `npm install`
6.  Ejecute `npm run dev` para iniciar el frontend
7.  Configure el archivo `.env` con sus variables de entorno siguiendo las instrucciones en `.env.example`

## Uso

Una vez que la instalación esté completa, puede acceder a la aplicación a través del navegador en `http://localhost:5173/`. Desde allí, puede registrarse, iniciar sesión, ver, crear, editar y eliminar productos. Además, puede acceder al panel de administración iniciando sesión y haciendo clic en el enlace "Panel Administrativo" en el footer una vez logueado. En el panel de administración, puede gestionar los productos.

## Dependencias del Frontend

Se utilizaron las siguientes dependencias en el frontend:

-   `material-ui`: para diseñar los componentes de la interfaz de usuario
-   `react-hook-form`: para crear y administrar formularios
-   `sweetalert`: para mostrar alertas
-   `swiper`: para crear carruseles

## Dependencias del Backend

Se utilizaron las siguientes dependencias en el backend:

-   `bcrypt`: para encriptar las contraseñas de los usuarios durante el registro y almacenarlas de manera segura en la base de datos
-   `cors`: para permitir solicitudes HTTP a los endpoints del backend desde el frontend
-   `dotenv`: para usar variables de entorno desde el archivo `.env`
-   `express`: para crear el servidor
-   `jsonwebtoken`: para generar y verificar tokens web JSON para la autenticación de usuarios
-   `mssql`: para conectarse a la base de datos de SQL Server
-   `multer`: para subir archivos desde el frontend y almacenarlos en el servidor
-   `rest-mssql-nodejs`: para permitir consultas desde el backend a la base de datos
-   `sequelize`: para conectarse a la base de datos con consultas personalizadas
-   `tedious`: para conectarse a la base de datos
-   `uuid`: para generar IDs universales únicos para productos y usuarios

### Dependencias de Desarrollo

Se utilizaron las siguientes dependencias en el backend con fines de desarrollo:

-   `nodemon`: para reiniciar automáticamente el servidor cuando se realizan cambios
-   `standard`: para configurar el ESLint

## Estructura del Backend

La estructura del backend de la aplicación sigue una arquitectura de rutas, controladores y servicios. Se han creado diferentes archivos para separar las rutas según su funcionalidad, tales como "categoryRoutes" para las peticiones relacionadas con las categorías, "loginRoute" para el endpoint del inicio de sesión, "productsRoutes" para las peticiones de productos, y "userRoutes" para las peticiones de usuarios. Además, cada archivo cuenta con sus respectivos controladores y servicios para manejar las peticiones GET, POST, PATCH y DELETE según sea necesario.

En el servicio de inicio de sesión se verifica la existencia del usuario con el correo electrónico especificado, y posteriormente se compara para confirmar si las credenciales son correctas. Si es así, se genera un token con JSON Web Token (JWT). La carpeta "database" contiene la configuración necesaria para la conexión a la base de datos, así como los procesos necesarios para conectarse.
Además, para el endpoint de creación de productos se hace uso de "multer" para subir la imagen enviada desde el frontend al servidor. Esto permite almacenar las imágenes de los productos en el servidor y asociarlas a cada producto creado.

## Estructura del Frontend
La estructura del frontend se divide en pages, routes, services, components, hooks y assets. Las páginas son las diferentes vistas que se mostrarán en las rutas, mientras que los componentes se utilizan en cada página según sea necesario. En el archivo routes.jsx se encuentra la configuración del sistema de ruteo. En los hooks, tenemos diferentes hooks personalizados como useUser, que nos permite adquirir el token del local storage para determinar el usuario que ha iniciado sesión; useProducts, que nos permite traer todos los productos de la base de datos; useProductById, que nos permite traer un producto por su id; y useCategories, que nos permite traer todas las categorías desde la base de datos.

En services, se encuentran los archivos donde se implementan las funciones para hacer las peticiones a los endpoints utilizando fetch. Entre los componentes más destacados se encuentran el productCard, que nos renderiza una tarjeta con la información de un producto según el dato del producto que le pasemos como parámetro o prop; productsList, que hace un grid de tarjetas de productos con los productos que trae de la base de datos y se le puede pasar una categoría como parámetro, lo que haría que se filtraran los productos renderizados para mostrar solo los de esa categoría; productSwipe, que se le pasa una lista de productos y los renderiza en tarjetas dentro de un swipe, se utiliza para mostrar los productos en oferta en la página principal; navbar, donde se encuentra el menú de navegación; y categoryMenu, donde tenemos diferentes iconos, uno por cada una de las categorías, para acceder al listado filtrado de productos de cada categoría.

## Contribuciones

¡Las contribuciones al proyecto son bienvenidas! Si tiene alguna sugerencia o mejora, no dude en crear una solicitud de extracción.