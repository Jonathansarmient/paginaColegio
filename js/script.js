let slideIndex = 0;  // Índice para llevar el control de la imagen actual
showSlides();  // Llamamos a la función de mostrar las imágenes

// Función para mostrar las imágenes
function showSlides() {
    let slides = document.querySelectorAll(".slide");  // Seleccionamos todos los elementos con la clase "slide"
    
    // Ocultamos todas las imágenes
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slideIndex++;  // Aumentamos el índice para mostrar la siguiente imagen
    
    // Si el índice es mayor que el número de slides, lo volvemos a poner en 1 (para que vuelva al principio)
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    // Mostramos la slide actual
    slides[slideIndex - 1].style.display = "block";
    
    // La función se llama de nuevo cada 5 segundos (5000 milisegundos)
    setTimeout(showSlides, 5000);
}

// Función para controlar la navegación con los botones
function plusSlides(n) {
    showSlidesManual(slideIndex += n);
}

// Mostrar el slide manualmente
function showSlidesManual(n) {
    let slides = document.querySelectorAll(".slide");
    
    // Si el índice es mayor que el número de slides, lo ponemos en 1
    if (n > slides.length) {slideIndex = 1}
    // Si el índice es menor que 1, lo ponemos en el número máximo de slides
    if (n < 1) {slideIndex = slides.length}
    
    // Ocultamos todas las slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Mostramos la slide actual
    slides[slideIndex - 1].style.display = "block";
}