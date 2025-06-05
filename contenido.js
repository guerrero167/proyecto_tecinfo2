function mostrarSeccion(id) {
  const secciones = document.querySelectorAll(".contenido");
  secciones.forEach(seccion => {
    seccion.style.display = "none";
  });

  const seleccionada = document.getElementById(id);
  if (seleccionada) {
    seleccionada.style.display = "block";
  }
}

// Mostrar la primera sección por defecto al cargar
window.onload = () => mostrarSeccion("visual");
