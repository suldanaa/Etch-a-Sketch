
const boxes = document.getElementById('boxes');
boxes.style.display = "flex";
boxes.style.flexWrap = "wrap";


for(let i=0; i<16; i++){
   for(let j=0; j<16; j++){
    var box = document.createElement('div');
    box.className = "box";
    box.style.border="1px solid grey";
    box.style.flexBasis = "6%";
    box.style.height = "5.1vh";
    boxes.appendChild(box);
   }
}

let drawBox = document.getElementsByClassName("box");



