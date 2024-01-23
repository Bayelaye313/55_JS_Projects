const btnPrev = document.querySelector('#prev');
const btnNext = document.querySelector('#next');
const progress = document.getElementById('progress');
const circle = document.querySelectorAll('.circle');
let cptActive = 1;

document.addEventListener('DOMContentLoaded', function () {
    btnNext.addEventListener('click', () => {
        if (cptActive < circle.length) {
            cptActive++;
            updateCircleClasses();
        } else {
            console.log('Quota atteint');
        }
    });

    btnPrev.addEventListener('click', () => {
        if (cptActive > 1) {
            cptActive--;
            updateCircleClasses();
        } else {
            console.log('Déjà au début');
        }
    });

    function updateCircleClasses() {
        circle.forEach((item, index) => {
            item.classList.toggle('active', index < cptActive);
        });

        const progressWidth = (cptActive - 1) /3 * 100 + '%';
        progress.style.width = progressWidth;

        btnPrev.disabled = cptActive === 1;
        btnNext.disabled = cptActive === circle.length;
    }
});
