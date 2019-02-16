# Practice Requirements

## Historias de usuario

1. &#9744; Accesible desde cualquier dispositivo. Mobile first!
2. &#9745; Listar cervezas
3. &#9745; En home, filtrar por texto y limitar a 10 max. Añadir filtro por fecha.
4. &#9744; El buscador de texto debe estar en un header con imagen de fondo. (Imagen adaptada como en el curso!)
5. &#9745; Navegar al detalle de la cerveza, la cual tiene más info que la mostrada en listado.
6. &#9744; En detalle se debe cumplir ALMENOS uno de los siguientes puntos:
    * guardar un comentario
    * añadir likes

## Notas desarrollador

1. &#9745; Realizar sin framework y sin librerias. Está permitido Coffee script o typescript.
2. &#9745; Necesario usar Webpack para gestión de assets
3. &#9745; Buena documentación README.md
4. &#9745; Se requiere el uso de SASS, LESS o Stylus.
5. &#9745; Uso de API.
6. &#9744; Uso de localStorage para guardar filtros (OPCIONAL)

## Uso de API

Acceder a https://web-bootcamp-exercise-beer-swagger-pgjtqotgtl.now.sh/api-docs/

La API Key será enviada en el header de la petición para los puntos 2 y 6 de la historia de usuario.

## Extras

### ESLINT

Usar https://eslint.org/ para estandarizar y mantener mismo estilo de código. Recomendable AirBnB configuration.

### Testing test unitarios

Familiarizarse con tests con las herramientas Mocha, chai, Jest, Jasmine

### Deploy con GitHub pages o now

* GitHub -> `git subtree push --prefix dist origin gh-pages`
* Now.sh -> https://zeit.co/now
