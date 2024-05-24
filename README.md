# Rick and Morty Characters Web App
Este proyecto consiste en desarrollar una página web utilizando React que muestre un listado de personajes de la serie "Rick and Morty". La aplicación permite filtrar personajes por nombre y mostrar detalles completos de cada personaje. A continuación, se describen las funcionalidades y cómo configurar y ejecutar el proyecto.

# Funcionalidades
Listado de Personajes

Se obtiene la información de los personajes a través de la API de Rick and Morty.
Se muestra una lista de los primeros 20 personajes, incluyendo:
- Foto
- Nombre
- Especie
- Filtrado de Personajes

Se incluye un campo de entrada que permite filtrar los personajes por nombre. A medida que se escribe en el campo, la lista se actualiza para mostrar solo los personajes cuyos nombres contienen las letras escritas.

# Detalle del Personaje

Al hacer clic en la tarjeta de un personaje, se navega a una página de detalles utilizando React Router DOM.
En la página de detalles se muestra:

- Foto
- Nombre
- Especie
- Planeta de origen
- Número de episodios en los que aparece
- Estado (vivo o muerto)

# Uso
*Navegación Principal*

Al abrir la aplicación, verás una lista de personajes de Rick and Morty con su foto, nombre y especie.
Filtrado de Personajes

Usa el campo de búsqueda en la parte superior de la lista para filtrar los personajes por nombre.
Ver Detalles del Personaje

Haz clic en cualquier tarjeta de personaje para ver una página con más detalles sobre el personaje seleccionado.

# Dependencias

React
React Router DOM
Axios (para manejar las solicitudes a la API)
CSS Modules (para estilos)

¡Gracias por usar la aplicación Rick and Morty Characters! Si tienes alguna pregunta o sugerencia, no dudes en abrir un issue en el repositorio.