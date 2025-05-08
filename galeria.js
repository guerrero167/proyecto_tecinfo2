document.querySelectorAll('.galeria img').forEach(imagen => {
    imagen.addEventListener('mouseenter', () => {
        imagen.style.transform = 'scale(1.05)';
        imagen.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.5)';
    });

    imagen.addEventListener('mouseleave', () => {
        imagen.style.transform = 'scale(1)';
        imagen.style.boxShadow = 'none';
    });

    imagen.addEventListener('click', () => {
        alert(`Has hecho clic en: ${imagen.alt}`);
    });
});
