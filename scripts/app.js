import { palabras } from "./palabras.js";
import {
  selectPalabra,
  ocultarLetras,
  plasmarHorcado,
  isABC,
} from "./horcado.js";
import { dibujarHorca, dibujarCuerpo, borrarTodo } from "./dibujo.js";

let newButton = document.getElementById("new");
let renounceButton = document.getElementById("renounce");

let palabra = selectPalabra(palabras).toLocaleUpperCase();
const limiteFallo = 6;
let countFallo = 0;

let arrLetras = ocultarLetras(palabra);
//65 - 90
let noFail = false;
dibujarHorca();
plasmarHorcado(arrLetras);
//console.log(arrLetras);
//console.log(palabra)
window.addEventListener(
  "keydown",
  function (event) {
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
  },
  false
);

newButton.addEventListener("click", (event) => {
  borrarTodo();
  palabra = selectPalabra(palabras).toLocaleUpperCase();
  arrLetras = ocultarLetras(palabra);
  countFallo = 0;
  noFail = false;
  dibujarHorca();
  plasmarHorcado(arrLetras);
});

renounceButton.addEventListener("click", (event) => {
  if (palabra != arrLetras.join("")) {
    plasmarHorcado(palabra);
    for (let i = 1; i < 7; i++) {
      dibujarCuerpo(i);
    }
  }
});
