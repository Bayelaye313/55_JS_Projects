/*=========== Declaration Variables et Functions JS===========*/
const boxes = document.querySelectorAll('.box');
const handleBoxVisibility = () =>
{
  const limitHeight = window.innerHeight * 0.8;

  boxes.forEach(box =>
    {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < limitHeight)
    {
      activeOnshow(box);
    } else
    {
      desableOnshow(box);
    }
  });
};

const activeOnshow = (box) =>
{
  if (!box.classList.contains('onshow'))
  {
    box.classList.add('onshow');
  }
};

const desableOnshow = (box) =>
{
  if (box.classList.contains('onshow'))
  {
    box.classList.remove('onshow');
  }
};

/*=========== Execute Function and active scroll event===========*/
handleBoxVisibility();
window.addEventListener('scroll', () => {handleBoxVisibility();});
