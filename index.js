let circle=document.getElementById("circle");
let changeColor=document.getElementById("change-color");
let chageShape=document.getElementById("change-shape");
let shape=document.getElementById("shape1");
let shapes=["triangle","circle1","shape1","diamond","rectangle"];


changeColor.addEventListener('click',()=>{
   circle.style.backgroundColor="#" + Math.floor(Math.random() * 16777215).toString(16);
   changeColor.style.backgroundColor="#" + Math.floor(Math.random() * 15777215).toString(16);
})

chageShape.addEventListener('click',()=>{
    console.log(Math.floor(Math.random()* (4- 0+ 1) + 0));
  shape.setAttribute("class",shapes[Math.floor(Math.random()* (4- 0+ 1) + 0)]);
})