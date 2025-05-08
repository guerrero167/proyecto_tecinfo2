// Interacción: Cambiar tamaño de la imagen al pasar el ratón
const images = document.querySelectorAll('.galeria-img');

images.forEach(img => {
    img.addEventListener('mouseover', () => {
        img.style.transform = "scale(1.1)";
        img.style.transition = "transform 0.3s ease";
    });

    img.addEventListener('mouseout', () => {
        img.style.transform = "scale(1)";
    });
});
