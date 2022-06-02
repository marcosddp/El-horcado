import { palabras } from "./palabras.js";
import {
  selectPalabra,
  ocultarLetras,
  plasmarHorcado,
  isABC,
} from "./horcado.js";
import { dibujarHorca, dibujarCuerpo } from "./dibujo.js";

let palabra = selectPalabra(palabras).toLocaleUpperCase();
console.log(palabra);
let arrLetras = ocultarLetras(palabra);
//65 - 90
let noFail = false;
dibujarHorca();
plasmarHorcado(arrLetras);
console.log(arrLetras);
window.addEventListener(
  "keydown",
  function (event) {
    let letra = event.key.toLocaleUpperCase();

    if (isABC(event.key)) {
      for (let p in palabra) {
        if (palabra[p] == letra) {
      
          arrLetras[p] = palabra[p];
          noFail = true;
        }
      }

      if (noFail) {
        noFail = false;
        plasmarHorcado(arrLetras);
      }
    }
  },
  false
);

/*
dibujarCuerpo(1);
dibujarCuerpo(2);
dibujarCuerpo(3);
dibujarCuerpo(4);
dibujarCuerpo(5);
dibujarCuerpo(6);
*/
