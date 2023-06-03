function agregarComentario(usuario, calificacion, comentario) {
  // Crear un elemento div para representar el comentario
  var comentarioElement = document.createElement('div');
  comentarioElement.className = 'comentario';

  // Construir el contenido del comentario
  var contenido = '<h3>' + usuario + '</h3>';
  contenido += '<p>Calificación: ' + calificacion + ' Estrellas</p>';
  contenido += '<p>' + comentario + '</p>';

  // Asignar el contenido al elemento del comentario
  comentarioElement.innerHTML = contenido;

  // Obtener la caja de comentarios
  var cajaComentarios = document.getElementById('caja-comentarios');

  // Agregar el comentario a la caja de comentarios
  cajaComentarios.appendChild(comentarioElement);
  <script>
    function limpiarReseñas() {
    // Limpiar las reseñas en el almacenamiento local
    localStorage.removeItem('comentarios')};

    // Limpiar la caja de comentarios en la página actual
    var cajaComentarios = document.getElementById('caja-comentarios');
    cajaComentarios.innerHTML = '';
  }
  </script>
}
