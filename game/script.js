// selecting all reuired elements
const selectBox = document.querySelector(".select-box"),
selectXBtn = selectBox.querySelector(".playerX"),
selectObtn = selectBox.querySelector(".playerO");
playBoard = document.querySelector(".play-board");

window.onload = ()=>{ // once window loaded
    selectXBtn.onclick = ()=>{
        selectBox.classList.add("hide"); //hide the select box on playerX button clicked
        playBoard.classList.add("show")
    } 
}