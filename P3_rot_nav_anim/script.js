/*=========== Declaration Variables JS===========*/

const btn_close = document.querySelector('#close');
const btn_open = document.querySelector('#open');
const content = document.querySelector('.container');
const list = document.querySelectorAll('nav ul li');

/*=========== DOM MANIP===========*/
document.addEventListener('DOMContentLoaded', function () {

    /*=========== FUNCTIONS UTILS===========*/
    function rotateButton(button, angle, origin) {
        button.style.transform = `rotate(${angle}deg)`;
        button.style.transformOrigin = origin;
    }
    function rotateContent(content, angle, origin) {
        content.style.transform = `rotate(${angle}deg)`
        content.style.transformOrigin = origin
    }
    function displayNav() {
        list.forEach((item, index) => {
            const percentage = 15 + index * 5;
            item.style.transform = `translateX(${percentage}%)`;
        });
    }
    function resetNav() {
        list.forEach((item, index) => {
            const percentage = -100 - index * 50;
            item.style.transform = `translateX(${percentage}%)`;
        });
      }

    /*=========== EVENTS===========*/
    btn_open.addEventListener('click', () => {
        rotateButton(btn_open, -70, "top");
        rotateButton(btn_close, 0, "0 0");
        rotateContent(content, -20, "0 0")
        displayNav()
    });

    btn_close.addEventListener('click', () => {
        rotateButton(btn_close, 90, "top");
        rotateButton(btn_open, 0, "0 0");
        rotateContent(content, 0, "0 0");
        resetNav();
    });
});