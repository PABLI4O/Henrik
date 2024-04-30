let start = document.querySelector('.start');

window.addEventListener('load', () => {
    start.classList.add('none');
    setTimeout(() => {
        start.remove();
    }, 600)
})