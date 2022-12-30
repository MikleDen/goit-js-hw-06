const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
fontSizeControl.addEventListener("input",onChange);
console.log(text)

function onChange(event){
    
    text.style.fontSize=`${event.target.value}px`;
}