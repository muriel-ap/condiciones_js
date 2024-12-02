//js para actividad 1
const imgCard = document.querySelector(".img_card");

imgCard.addEventListener("click", () => {
  if (imgCard.style.border === "2px solid red") {
    imgCard.style.border = "none";
  } else {
    imgCard.style.border = "2px solid red";
  }
});

//js para actividad 2
const sticker1Input = document.querySelector('#sticker1');
const sticker2Input = document.querySelector('#sticker2');
const sticker3Input = document.querySelector('#sticker3');
const mensajeTxt = document.querySelector('.mensajeTxt');
const checkBtn = document.querySelector('.btn_verificar');

const limpiarMensaje = () => {
  mensajeTxt.innerHTML = "";
};

sticker1Input.addEventListener("input", limpiarMensaje);
sticker2Input.addEventListener("input", limpiarMensaje);
sticker3Input.addEventListener("input", limpiarMensaje);

checkBtn.addEventListener("click", () => {

  const sticker1Cant = parseInt(sticker1Input.value) || 0;
  const sticker2Cant = parseInt(sticker2Input.value) || 0;
  const sticker3Cant = parseInt(sticker3Input.value) || 0;

  const totalStickers = sticker1Cant + sticker2Cant + sticker3Cant;

  if (totalStickers > 10) {
    mensajeTxt.innerHTML = "Excediste el máximo permitido de 10 Stickers.";
    mensajeTxt.style.color = "rgb(236, 29, 29)";
  } else {
    mensajeTxt.innerHTML = `Llevas ${totalStickers} stickers.`;
    mensajeTxt.style.color = "#000";
    }
});

//js para actividad 3
const selectUno = document.querySelector("#uno");
const selectDos = document.querySelector("#dos");
const selectTres = document.querySelector("#tres");
const responder = document.querySelector(".responder");
const validBtn = document.querySelector (".btn_validar");

const limpiarRespuesta = () => {
  responder.innerHTML = "";
};

selectUno.addEventListener("change", limpiarRespuesta);
selectDos.addEventListener("change", limpiarRespuesta);
selectTres.addEventListener("change", limpiarRespuesta);

validBtn.addEventListener("click", () => {

 if (selectUno.value === "9" && selectDos.value === "1" && selectTres.value === "1") {
    responder.innerHTML = "Password 1 correcta";
    mensajeTxt.style.color = "#000";
  } else if (selectUno.value === "7" && selectDos.value === "1" && selectTres.value === "4") {
    responder.innerHTML = "Password 2 correcta";
    mensajeTxt.style.color = "#000";
  } else {
    responder.innerHTML = "Password incorrecta";
    responder.style.color = "rgb(236, 29, 29)";
  }
});








