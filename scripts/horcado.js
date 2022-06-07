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

export function existWord(newWords, word) {
  let isExist = true;
  for (let nws in newWords) {
    if (newWords[nws].toLocaleUpperCase() == word.toLocaleUpperCase()) {
      isExist = false;
    }
  }

  return isExist;
}

export function palabraValida(palabra) {
  if (palabra.length > 2 && palabra.length < 9) {
    for (let p in palabra) {
      if (!isABC(palabra[p].toLocaleUpperCase())) {
        return false;
      }
    }

    return true;
  }

  return false;
}

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

export function plasmarHorcado(arrLetras,arrLetrasFallo) {
  let textProblem = document.getElementById("text__problem");
  let textUsed= document.getElementById("text__used");

  while (textProblem.firstChild) {
    textProblem.removeChild(textProblem.firstChild);
  }

  while (textUsed.firstChild) {
    textUsed.removeChild(textUsed.firstChild);
  }

  for (let letra in arrLetras) {
    let h3 = document.createElement("h3");
    let node = document.createTextNode(arrLetras[letra]);
    h3.appendChild(node);

    textProblem.appendChild(h3);

  }

  for(let letra in arrLetrasFallo){
    let h4=document.createElement("h4");
    let node2 = document.createTextNode(arrLetrasFallo[letra]);
    h4.appendChild(node2);

    textUsed.appendChild(h4);
  }

}
