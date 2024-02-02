const thumb = document.querySelectorAll('.thumb > li');
const section = document.querySelector('section');
const close = document.querySelector('#close');
const open = document.querySelector("#open");
const navigation = document.querySelector('.navigation')

thumb.forEach((peps, index) => {
    peps.addEventListener('click', changeBgColor);

    function changeBgColor() {
        if (index === 2) {
            section.style.backgroundColor = '#1e1e1e';
        } else if(index === 1) {
            section.style.backgroundColor = '#e60c2c';
        } else {
            section.style.backgroundColor = '#0062be';
        }
    }
});
function rotateButton(button, angle, origin) {
    button.style.transform = `rotate(${angle}deg)`;
    button.style.transformOrigin = origin;
}
function displayNavigation() {
    navigation.style.visibility = 'visible';
    navigation.style.opacity = '1';
}
function resetNavigation() {
    navigation.style.visibility = 'hidden';
    navigation.style.opacity = '0';

}
open.addEventListener('click', ()=>{
    rotateButton(open, -90, "top");
    rotateButton(close, 0, "0 0");
    console.log('open clicked');
    displayNavigation();

})
close.addEventListener('click', () => {
    console.log('close clicked');
    rotateButton(close, 130, "top");
    rotateButton(open, 0, "0 0");
    resetNavigation();
});

