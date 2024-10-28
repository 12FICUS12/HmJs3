const rotatorCases = document.querySelectorAll('.rotator__case');
let currentIndex = 0;
function rotate() {
    rotatorCases[currentIndex].classList.remove('rotatorcase_active');
    currentIndex = (currentIndex + 1) % rotatorCases.length;

    const nextCase = rotatorCases[currentIndex];
    const speed = nextCase.getAttribute('data-speed');
    const color = nextCase.getAttribute('data-color');
    nextCase.style.color = color;

    nextCase.classList.add('rotatorcase_active');
    setTimeout(rotate, speed);
}

// Запускаем функцию rotate с начальным значением скорости
const initialSpeed = rotatorCases[currentIndex].getAttribute('data-speed');
setTimeout(rotate, initialSpeed);