const btnPrev = document.querySelector('#prev');
const btnNext = document.querySelector('#next');
const progress = document.getElementById('progress');
const circle = document.querySelectorAll('.circle');

document.addEventListener('DOMContentLoaded', function(){
    btnNext.addEventListener('click',()=>{
        
        console.log(parseInt(progress.style.width));

        /*while (prog < '100%') {
            prog + '38%';
        }*/

    });
    btnPrev.addEventListener('click',()=>{
        
    })

})