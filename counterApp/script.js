const count = document.querySelector('.count');
const btns  =document.querySelector('.buttons');

btns.addEventListener('click', (e)=> {
    if(e.target.classList.contains('add')) {
        count.innerHTML ++;
    }
    else if(e.target.classList.contains('subtract')) {
        count.innerHTML --;
    } 
    else if(e.target.classList.contains('reset')) {
        count.innerHTML = 0;
    }
})