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
    elements += `<div style="background-color: ${getRandomHexColor()}"></div>`;
  }
  
  boxesEl.insertAdjacentHTML('afterbegin', elements);

  const arr = [...boxesEl.children];
  arr.forEach((div, index) => {
    div.style.width = `${30 + 10 * (index + 1)}px`;
    div.style.height = `${30 + 10 * (index + 1)}px`;
  });
};