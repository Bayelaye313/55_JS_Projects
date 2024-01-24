const search = document.querySelector('.search');
const input = document.querySelector('.input');
const btn = document.querySelector('.btn');

document.addEventListener('DOMContentLoaded', function () {
    btn.addEventListener('click', () => {
    search.classList.toggle('active');
});
});