const p1 = document.getElementById("p1");
const h2List = document.getElementsByClassName("subtitulo");
const textInput = document.getElementById("username-input");

const element1 = document.querySelector("#p1");
const element2 = document.querySelector(".subtitulo");
//console.log(p1);
//console.log(document);

p1.textContent = "Texto dinamico"; //remplaza lo que habia en el html

textInput.addEventListener("input", (e) => {
    p1.textContent = e.target.value;
    //console.log(e.target.value);
})