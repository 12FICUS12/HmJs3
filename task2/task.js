const rotatorCases = document.querySelectorAll('.rotator__case');
let currentIndex = 0;

function rotate() {
    rotatorCases[currentIndex].classList.remove('rotator__case_active');
    currentIndex = (currentIndex + 1) % rotatorCases.length;

    const nextCase = rotatorCases[currentIndex];
    const speed = nextCase.getAttribute('data-speed');
    const color = nextCase.getAttribute('data-color');

    nextCase.style.color = color;
    nextCase.classList.add('rotator__case_active');
    setTimeout(rotate, speed);
}


const initialSpeed = rotatorCases[currentIndex].getAttribute('data-speed');
setTimeout(rotate, initialSpeed);