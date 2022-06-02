const letras = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "Ñ",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

export function isABC(letra) {
  for (let l in letras) {
    if (letra.toUpperCase() == letras[l].toLocaleUpperCase()) {
      return true;
    }
  }

  return false;
}

export function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function selectPalabra(palabras) {
  return palabras[randomNum(0, palabras.length - 1)].toUpperCase();
}

export function ocultarLetras(palabra) {
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

export function plasmarHorcado(arrLetras) {
  let textProblem = document.getElementById("text__problem");

  while (textProblem.firstChild) {
    textProblem.removeChild(textProblem.firstChild);
  }

  for (let letra in arrLetras) {
    let p = document.createElement("h3");
    let node = document.createTextNode(arrLetras[letra]);
    p.appendChild(node);

    textProblem.appendChild(p);
  }
}
