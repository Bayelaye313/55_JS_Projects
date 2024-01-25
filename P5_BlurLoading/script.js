const bg = document.querySelector('.bg');
const loadingText = document.querySelector('.loading-text');
    
let start = 0;
const txtLoadParse = 100;

function blurring() {
    if (txtLoadParse > start) {
        start++;
        loadingText.textContent = `${start}%`;

        const blurVal = start/txtLoadParse;
        loadingText.style.opacity = blurVal;
        bg.style.filter = `blur(${10 - 10*blurVal}px)`;
      } else {
        clearInterval(IntervalId);
        loadingText.textContent= '';
      }
}
const IntervalId = setInterval(blurring, 100);
  