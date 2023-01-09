const btnCreateEl = document.querySelector('#controls button[data-create]');

const btnDestroyEl = document.querySelector('#controls button[data-destroy]');

const inputEl = document.querySelector('#controls input')

const boxesEl = document.querySelector('#boxes');

const controlsEl = document.querySelector('#controls');

btnCreateEl.addEventListener('click',createEl);
btnDestroyEl.addEventListener('click',destroyEl);

function createEl(event){
  createBoxes(Number(inputEl.value));
}

function destroyEl(event){
  boxesEl.innerHTML=" ";
  inputEl.value=0;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



function createBoxes(amount) {
  let elements = ``;

  for (let i = 0; i < amount; i += 1) {
    let amount = inputEl.value;
    elements += `<div 
    style="
    background-color: ${getRandomHexColor()};
    width:${30 + 10*i}px;
    height:${30 + 10*i}px;


    "></div>`;
  }
  
  boxesEl.insertAdjacentHTML('beforeend', elements);


};
