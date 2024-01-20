const panel = document.querySelectorAll('.panel');

document.addEventListener('DOMContentLoaded', function(){
    panel.forEach(item => item.addEventListener('click', ()=>{
        removeActiveClass();
        item.classList.add('active');
    }))

    function removeActiveClass()
    {
        panel.forEach(item =>
            {item.classList.remove('active');
            })
    }
})