let userDim=0;
const btn = document.createElement('button');
btn.textContent = "Change graph dimensions"
btn.style.position = "Absolute";
btn.style.fontSize = "24px";
btn.style.marginLeft = "40%"
btn.style.marginTop = ".5%";

btn.addEventListener('click', ()=>{

   userDim = prompt("Enter desired dimensions (1-100)");
   while(userDim>100 || userDim<1){
      userDim = prompt("Error: Invalid Dimension. Enter desired dimensions (1-100).");
   }
   const boxes = document.getElementById('boxes');
//controls all the boxes
boxes.style.display = "flex";
boxes.style.flexWrap = "wrap";
boxes.style.position = "relative";
boxes.style.marginLeft = "7px";
boxes.style.height = "100%";
boxes.style.width = "100%";

//removes the graph if it's there
if(boxes.hasChildNodes()){
      while(boxes.firstChild){
         boxes.removeChild(boxes.firstChild);
      }
}

for(let i=0; i<userDim; i++){
   for(let j=0; j<userDim; j++){
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


   
});
let clickEvent = new Event('click');
btn.dispatchEvent(clickEvent);

document.body.appendChild(btn);
