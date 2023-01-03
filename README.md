# iron_bones_arte_infinita
- Ya es funcional: https://ironbonescd.github.io/iron_bones_arte_infinita/

# Documentacion
- No queria poner los prompts como variable de entorno porque complicaba el
codigo para los principiantes pero mejor lo documento:
  - SERVER variable secreta en github que indica el servidor al que le vamos a
        hacer la peticion
  - TOKEN es una variable variable secreta en github que se pone antes de ofuscar el javascript.
  - TEXT_PROMpT es otra variable secreta en github para poder cambiar facil el texto
    del prompt para texto, en este ejemplo es: Escribeme una cancion en el 
        estilo de las canciones clasicas de cali pero solo 
        pon la cancion no escribas "Aqui esta la cancion" o "Aqui va la cancion"
  -  IMG_PROMPT cambia el promt para la imagen y depende de la cancion que le llega
        al metodo: "pintura colorida ${promt}" sin las comillas.
- TODAS estas variables se unen al codigo en el deploy de github actions para
    correrlo local crear un archivo ./js/config.js y ponerlas ahi como const
- El servidor no se configura con variables secretas de github sino con variables
    de entorno, el codigo del servidor es: https://github.com/civilian/chatgpt-clone

# TODO
- Mejorar CSS.
- Proteger mejor el API, si eso es posible.

