import { palabras } from "./palabras.js";
import {
  selectPalabra,
  ocultarLetras,
  plasmarHorcado,
  isABC,
  palabraValida,
  existWord,
} from "./horcado.js";
import { dibujarHorca, dibujarCuerpo, borrarTodo } from "./dibujo.js";

let newButton = document.getElementById("new");
let renounceButton = document.getElementById("renounce");
let newWordButton = document.getElementById("new-word");
let startButton = document.getElementById("start");
let saveButton = document.getElementById("save");
let cancelButton = document.getElementById("cancel");
let textarea = document.getElementById("input__textarea");

let addWord = document.getElementById("add-word");
let initiation = document.getElementById("initiation");
let challenge = document.getElementById("challenge");

let palabra = "";
let newWords = [];
const limiteFallo = 6;
let countFallo = 0;

let arrLetras = [];
//65 - 90
let noFail = false;
let jugando = false;

function empezamos() {

  countFallo = 0;
  noFail = false;
  console.log(newWords != []);
  if (newWords.length>0) {
   
    palabra = selectPalabra(newWords).toLocaleUpperCase();
    arrLetras = ocultarLetras(palabra);
    dibujarHorca();
    plasmarHorcado(arrLetras);

    console.log(newWords);
    let aux=[]
    for(let nws in newWords){

      if(newWords[nws]!=palabra){
        aux.push(newWords[nws])
      }

    }

    newWords=aux


    console.log(newWords);
  } else {
  
    palabra = selectPalabra(palabras).toLocaleUpperCase();
    arrLetras = ocultarLetras(palabra);
    dibujarHorca();
    plasmarHorcado(arrLetras);
  }
 
}

//console.log(arrLetras);
//console.log(palabra)
window.addEventListener(
  "keydown",
  function (event) {
    if (jugando) {
      let letra = event.key.toLocaleUpperCase();

      if (isABC(event.key) && countFallo < 7) {
        for (let p in palabra) {
          if (palabra[p] == letra && arrLetras[p] == " ") {
            arrLetras[p] = palabra[p];
            noFail = true;
          }
        }

        if (noFail) {
          noFail = false;
          plasmarHorcado(arrLetras);
        } else {
          countFallo++;
          dibujarCuerpo(countFallo);
        }
      }
    }
  },

  false
);

newButton.addEventListener("click", (event) => {
  borrarTodo();
 empezamos();
});

renounceButton.addEventListener("click", (event) => {
  if (palabra != arrLetras.join("")) {
    plasmarHorcado(palabra);
    for (let i = 1; i < 7; i++) {
      dibujarCuerpo(i);
    }
  }
});

newWordButton.addEventListener("click", (event) => {
  addWord.classList.remove("hidden");
  initiation.classList.add("hidden");
});

saveButton.addEventListener("click", (event) => {
  console.log(textarea.value);

  let newWord = textarea.value;
  newWord = newWord.toLocaleUpperCase();

  if (palabraValida(newWord)) {
    if (existWord(newWords, newWord)) {
      newWords.push(newWord);
    }
  }
});

cancelButton.addEventListener("click", (event) => {
  jugando = true;
  empezamos();
  challenge.classList.remove("hidden");
  addWord.classList.add("hidden");
});

startButton.addEventListener("click", (event) => {
  jugando = true;
  empezamos();
  challenge.classList.remove("hidden");
  initiation.classList.add("hidden");
});
