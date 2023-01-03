# poemas_cali_pachanguero_gpt3
- Ya es funcional: https://civilian.github.io/poemas_cali_pachanguero_gpt3/

# Documentacion
- No queria poner los promts como variable de entorno porque complicaba el
codigo para los principiantes pero mejor lo documento:
  - SERVER variable secreta en github que indica el servidor al que le vamos a
        hacer la peticion
  - TOKEN es una variable variable secreta en github que se pone antes de ofuscar el javascript.
  - TEXT_PROMT es otra variable secreta en github para poder cambiar facil el texto
    del promt para texto, en este ejemplo es: Escribeme una cancion en el 
        estilo de las canciones clasicas de cali pero solo 
        pon la cancion no escribas "Aqui esta la cancion" o "Aqui va la cancion"
  -  IMG_PROMT cambia el promt para la imagen y depende de la cancion que le llega
        al metodo: "pintura colorida ${promt}" sin las comillas.
- TODAS estas variables se unen al codigo en el deploy de github actions para
    correrlo local crear un archivo ./js/config.js y ponerlas ahi como const     

# TODO
- Mejorar CSS.
- Proteger mejor el API, si eso es posible.

