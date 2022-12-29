const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueCount=document.querySelector('#value');
let counterValue =0;

decrementBtn.addEventListener("click", () => {
    counterValue= counterValue-1;
    valueCount.innerHTML=counterValue;
  });

incrementBtn.addEventListener("click", () => {
    counterValue= counterValue+1;
    valueCount.innerHTML=counterValue;
  });