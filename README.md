# MetroMemory
MICRO-PROYECTO 1
Se necesita que usted desarrolle un juego de memoria interactivo y atractivo. El juego debe permitir a los usuarios hacer clic en las tarjetas para revelar imágenes ocultas y encontrar pares coincidentes. La aplicación debe llevar un registro del tiempo que le toma al usuario completar el juego, asignar un puntaje basado en la rapidez con la que el usuario completa el juego y almacenar y recuperar los puntajes de los usuarios utilizando Localstorage para mostrar una tabla de puntuaciones de los mejores jugadores. La aplicación debe proporcionar una experiencia visual atractiva y dinámica.

# H1 Requerimientos funcionales
## H2 Interfaz de usuario
* La aplicación debe tener una interfaz de usuario clara y fácil de usar. Además, debe ser responsive (el diseño debe adaptarse a pantallas de teléfono móvil, tabletas y computadoras de escritorio).
* Utilizar HTML para estructurar el contenido de la aplicación, incluyendo el tablero de juego, las tarjetas, el temporizador, el puntaje, la tabla de puntuaciones y el formulario de nombre de usuario.
* Aplicar estilos con CSS para hacer que la aplicación sea visualmente atractiva y coherente.

## H2 Juego de memoria
* El juego consta de 16 tarjetas, lo que significa que habrá 8 pares iguales.
* La aplicación debe permitir a los usuarios hacer clic en las tarjetas para revelar imágenes ocultas. Las imágenes utilizadas deben ser alusivas a la UNIMET.
* Los usuarios deben buscar pares coincidentes de imágenes al hacer clic en las tarjetas.
* Cuando se encuentre un par coincidente, las tarjetas deben permanecer visibles.
* Si las tarjetas no coinciden, deben ocultarse nuevamente después de un breve período de tiempo.
* No puede haber más de dos tarjetas visibles al mismo tiempo. (Sin contar las ya encontradas)
* Utilizar Javascript para gestionar la lógica del juego de memoria.

## H2 Temporizador y puntaje
* niciar un temporizador cuando comience el juego, con un límite de tiempo de 3 minutos.
* Llevar un registro del tiempo que le toma al usuario completar el juego.
* Calcular el puntaje del jugador en función de la rapidez con la que completan el juego: cuanto más rápido lo hagan, mayor será su puntaje. 
* puntuación = puntuación_máxima * (tiempo_restante / tiempo_total)
* Mostrar el temporizador y el puntaje en la interfaz de usuario.
* Utilizar Javascript para gestionar la lógica del temporizador y el cálculo del puntaje.

## H2 Registro de usuarios y tabla de puntuaciones
* Solicitar el nombre de usuario antes de comenzar el juego.
* Almacenar y recuperar el nombre de usuario y su puntaje utilizando Localstorage
* Mostrar la tabla de puntuaciones ordenada de los mejores jugadores en la interfaz de usuario.
* Utilizar Javascript para gestionar la lógica del registro de usuarios y la tabla de puntuaciones.

## H2 Funcionalidad de reinicio
* Proporcionar una opción para reiniciar el juego, lo que permitirá a los usuarios comenzar de nuevo con un tablero de juego recién generado. Las cartas se deben “mezclar” al inicio de cada juego.
* Al reiniciar el juego, el temporizador y la puntuación actual se deben restablecer, pero los puntajes almacenados en Localstorage deben mantenerse intactos.
* Control de versiones y alojamiento
* Utilizar git para el control de versiones del proyecto.
* Subir el proyecto a un repositorio de GitHub.
* Alojar el proyecto utilizando GitHub Pages. 
* En caso de que el proyecto no esté alojado en Github Pages, se evaluará con una puntuación máxima de 10 puntos.

## H1 Evaluación
* Estructura HTML: 1 pto
* Estructura CSS: 1 pto
* Responsive: 2 pts
* Funcionalidad Javascript: 3 pts
* Implementación del juego de memoria: 3 pts
* Temporizador y cálculo del puntaje: 2 pts
* Almacenamiento de usuarios y tabla de puntuaciones: 2 pts
* Uso de Localstorage para guardar y recuperar puntajes y usuarios: 2 pts
* Funcionalidad de reinicio: 1 pt
* Apreciación (esfuerzo y estética): 3 pts
