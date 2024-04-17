let color = ["red", "yellow","cyan","black","voilet","blue","green","purple","orange","lightgreen","lemon",];
let index = 0;
let shapeChangeEle = document.getElementById("shapeButton");
let colorChangeEle = document.getElementById("colorButton"); 
shapeChangeEle.addEventListener("click", changeShape);
colorChangeEle.addEventListener("click", changeColor);
function changeColor() {
    if (index === color.length) {
            index = 0;
    }
    document.getElementById("sect1").style.backgroundColor = color[index];
    index++;
}
let isTriangle = false; 
function changeShape() {
    if (!isTriangle) {
      let i = document.getElementsByClassName("display")[0];
      i.className = "triagle-change";
      isTriangle = true;
    }
    else{
      let i = document.getElementsByClassName("triagle-change")[0];
      i.className = "display";
      isTriangle = false;
    }
}