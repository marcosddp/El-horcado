let canvas, context, canvaso, contexto;
canvaso = document.getElementById("imageView");
context = canvaso.getContext("2d");
context.lineWidth = 5;

export function dibujarHorca() {
  context.strokeStyle = "#d8315bff";
  context.beginPath();

  context.moveTo(0, 302);
  context.lineTo(321, 304);
  context.stroke();
  context.closePath();

  context.strokeStyle = "#d8315bff";
  context.beginPath();
  context.moveTo(68, 301);
  context.lineTo(70, 20);
  context.stroke();
  context.closePath();

  context.strokeStyle = "#d8315bffs";
  context.beginPath();
  context.moveTo(69, 23);
  context.lineTo(191, 22);
  context.stroke();
  context.closePath();

  context.strokeStyle = "#d8315bff";
  context.beginPath();
  context.moveTo(187, 21);
  context.lineTo(187, 78);
  context.stroke();
  context.closePath();
}

export function dibujarCuerpo(numPartes) {
  switch (numPartes) {
    case 1:
      context.strokeStyle = "#d8315bff";
      context.save();
      context.translate(186, 100);
      context.scale(1, 0.8);
      context.beginPath();
      context.arc(0, 0, 26, 0, 6.283185307179586, false);
      context.stroke();
      context.closePath();
      context.restore();
      break;

    case 2:
      context.strokeStyle = "#d8315bff";
      context.beginPath();
      context.moveTo(184, 120);
      context.lineTo(182, 208);
      context.stroke();
      context.closePath();
      break;

    case 3:
      context.strokeStyle = "#d8315bff";
      context.beginPath();
      context.moveTo(182, 205);
      context.lineTo(160, 234);
      context.stroke();
      context.closePath();
      break;

    case 4:
      context.strokeStyle = "#d8315bff";
      context.beginPath();
      context.moveTo(182, 204);
      context.lineTo(205, 232);
      context.stroke();
      context.closePath();
      break;

    case 5:
      context.strokeStyle = "#d8315bff";
      context.beginPath();
      context.moveTo(183, 152);
      context.lineTo(148, 171);
      context.stroke();
      context.closePath();
      break;

    case 6:
      context.strokeStyle = "#d8315bff";
      context.beginPath();
      context.moveTo(182, 153);
      context.lineTo(220, 172);
      context.stroke();
      context.closePath();
      break;
  }
}

/*
##################################
context.strokeStyle = '#d8315bff';
context.beginPath();

context.moveTo(0, 302);
context.lineTo(321, 304);
context.stroke();
context.closePath();

context.strokeStyle = '#d8315bff';
context.beginPath();
context.moveTo(68, 301);
context.lineTo(70, 20);
context.stroke();
context.closePath();
########################

context.strokeStyle = '#d8315bff';
context.save();
context.translate(186, 100);
context.scale(1, 0.8);
context.beginPath();
context.arc(0, 0, 26, 0, 6.283185307179586, false);
context.stroke();
context.closePath();
context.restore();


context.strokeStyle = '#d8315bff';
context.beginPath();
context.moveTo(184, 120);
context.lineTo(182, 208);
context.stroke();
context.closePath();

context.strokeStyle = '#d8315bff';
context.beginPath();
context.moveTo(182, 205);
context.lineTo(160, 234);
context.stroke();
context.closePath();


context.strokeStyle = '#d8315bff';
context.beginPath();
context.moveTo(182, 204);
context.lineTo(205, 232);
context.stroke();
context.closePath();


context.strokeStyle = '#d8315bff';
context.beginPath();
context.moveTo(183, 152);
context.lineTo(148, 171);
context.stroke();
context.closePath();

context.strokeStyle = '#d8315bff';
context.beginPath();
context.moveTo(182, 153);
context.lineTo(220, 172);
context.stroke();
context.closePath();


context.strokeStyle = '#d8315bffs';
context.beginPath();
context.moveTo(69, 23);
context.lineTo(191, 22);
context.stroke();
context.closePath();

context.strokeStyle = '#d8315bff';
context.beginPath();
context.moveTo(187, 21);
context.lineTo(187, 78);
context.stroke();
context.closePath();

*/
