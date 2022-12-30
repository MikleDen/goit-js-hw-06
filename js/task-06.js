
const validationInput = document.querySelector("#validation-input");
validationInput.addEventListener("blur", onInputBlur);
function onInputBlur(event) {
  const myInput = event.currentTarget;
  const corectLength = Number(myInput.dataset.length);
  if (myInput.value.length === corectLength) {
    myInput.classList.remove("invalid");
    myInput.classList.add("valid");
  } else {
    myInput.classList.remove("valid");
    myInput.classList.add("invalid");
  }
  
}