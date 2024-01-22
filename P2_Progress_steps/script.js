const btnPrev = document.querySelector('#prev');
const btnNext = document.querySelector('#next');
const progress = document.getElementById('progress');
const circle = document.querySelectorAll('.circle');
let cptActive = 1;

document.addEventListener('DOMContentLoaded', function () {
    btnNext.addEventListener('click', () => {
        cptActive++;

        if (cptActive <= circle.length) {
            updateCircleClasses()
        } else {
            console.log('Quota atteint');
        }
    });

    btnPrev.addEventListener('click', () => {
        cptActive--;

        if (cptActive >= 1) {
            updateCircleClasses();
        } else {
            console.log('Déjà au début');
        }
    });

    function updateCircleClasses() {
        const actives = document.querySelectorAll('.active')
            circle.forEach((item, index)=>{
                item.classList.toggle('active', index < cptActive);

            });
            progress.style.width = (actives.length - 1) / (circle.length - 1) * 100 + '%'
            btnPrev.disabled = cptActive === 1;
            btnNext.disabled = cptActive === circle.length;
    }

});
