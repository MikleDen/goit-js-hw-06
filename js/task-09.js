const color = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');
const body = document.querySelector('body');

changeColorBtn.addEventListener('click',colorChange);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function colorChange(event){

  body.style.backgroundColor=getRandomHexColor();
  color.innerHTML=(`${getRandomHexColor()}`)

}


