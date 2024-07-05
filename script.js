
const boxes = document.getElementById('boxes');
//controls all the boxes
boxes.style.display = "flex";
boxes.style.flexWrap = "wrap";
boxes.style.position = "relative";
boxes.style.marginLeft = "7px";
boxes.style.height = "100%";
boxes.style.width = "100%";



for(let i=0; i<16; i++){
   for(let j=0; j<16; j++){
   //controls individual boxes
    var box = document.createElement('div');
    box.className = "box";
    box.style.border="1px solid lightgrey";
    box.style.flexBasis = "6%";
    boxes.appendChild(box);
   }
}

//determines all the boxes behavior
let drawBox = document.getElementsByClassName("box");
for(let i=0; i<drawBox.length; i++){
   drawBox[i].addEventListener("mouseover", ()=>{
      drawBox[i].style.backgroundColor = "grey";
   });
}

