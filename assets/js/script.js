//js para actividad 1
const imgCard = document.querySelector(".img_card");

imgCard.addEventListener("click", function() {
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

checkBtn.addEventListener('click', () => {

  const sticker1Count = parseInt(sticker1Input.value) || 0;
  const sticker2Count = parseInt(sticker2Input.value) || 0;
  const sticker3Count = parseInt(sticker3Input.value) || 0;

  const totalStickers = sticker1Count + sticker2Count + sticker3Count;

  if (totalStickers > 10) {
    mensajeTxt.textContent = "Excediste el máximo permitido. Máximo: 10 stickers.";
    mensajeTxt.style.color = "red";
  } else {
    mensajeTxt.textContent = `Llevas ${totalStickers} stickers.`;
    mensajeTxt.style.color = "green";
  }
});

//js para actividad 3
const selectUno = document.querySelector("#uno");
const selectDos = document.querySelector("#dos");
const selectTres = document.querySelector("#tres");
const responder = document.querySelector(".responder");
const validBtn = document.querySelector (".btn_validar")

validBtn.addEventListener("click", () => {
  console.log("¡El botón fue clickeado!");

  if (selectUno.value <= 0 || selectDos.value <= 0 || selectTres.value <= 0) {
    alert("Debes seleccionar un número mayor");
  } else if (selectUno.value === "9" && selectDos.value === "1" && selectTres.value === "1") {
    responder.innerHTML = "¡Lo lograste! Contraseña 1 correcta";
  } else if (selectUno.value === "7" && selectDos.value === "1" && selectTres.value === "4") {
    responder.innerHTML = "¡Lo lograste! Contraseña 2 correcta";
  } else {
    responder.innerHTML = "Contraseña incorrecta, intenta nuevamente.";
  }
});








