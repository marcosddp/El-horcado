import { palabras } from "./palabras.js";

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function selectPalabra(palabras) {
  return palabras[randomNum(0, palabras.length - 1)].toUpperCase();
}

function ocultarLetras(palabra) {
  let i = 0;
  let arr = palabra.split("");

  let cantOculta = randomNum(1, palabra.length - 1);

  if (palabra.length > 3 && cantOculta == 1) {
    cantOculta = randomNum(3, palabra.length - 1);
  }


  while (i < cantOculta) {
    let remp = randomNum(0, palabra.length - 1);

    if (arr[remp] != " ") {
      arr[remp] = " ";

      i++;
    }
  }

  return arr;
}

function horcado(palabras) {
  let palabra = selectPalabra(palabras);
  

  let arrLetras = ocultarLetras(palabra);

  for (let letra in arrLetras) {
    let p = document.createElement("h3");
    let node = document.createTextNode(arrLetras[letra]);
    p.appendChild(node);
    let element = document.getElementById("text__problem");
    element.appendChild(p);
  }
}

horcado(palabras);
