function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (rect.top >= 0 && rect.bottom <= window.innerHeight);
}

const proyectos = document.querySelectorAll('.proyectos');

window.addEventListener('scroll', function() {
    proyectos.forEach(function(proyecto) {
        if (isElementInViewport(proyecto)) {
            proyecto.classList.add('visible');
        } 
    });
});

window.addEventListener('load', function() {
    proyectos.forEach(function(proyecto) {
        if (isElementInViewport(proyecto)) {
            proyecto.classList.add('visible');
        }
    });
});

let contacto = document.getElementById('contacto')
const texts = ['Llamame: 3148637135 ', 'Mandame un correo a dr5554160@gmail.com']
let currentIndex = 0;
let text = texts[currentIndex];
let charIndex = 0;

function typeAndDelete() {
    if (charIndex > 0) {
        contacto.textContent = text.slice(0, charIndex - 1);
        charIndex--;
        setTimeout(typeAndDelete, 100);
    } else {
        currentIndex = (currentIndex + 1) % texts.length;
        text = texts[currentIndex];
        charIndex = 0;
        writeText();
    }
}

function writeText() {
    if (charIndex < text.length) {
        contacto.textContent = text.slice(0, charIndex + 1);
        charIndex++;
        setTimeout(writeText, 200);
    } else {
        setTimeout(typeAndDelete, 2000);
    }
}

writeText();
