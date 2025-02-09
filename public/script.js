const buttonNo = document.querySelector('#no')
const buttonYes = document.querySelector('#yes')

let fontSize = 2

let messages = [
  'Estas segura?',
  'Piensalo bien',
  'Piensalo muy bien',
  'Piensalo',
  'Mira el otro botón'
]

buttonNo.addEventListener('click', () => {
  fontSize = fontSize + .5
  buttonYes.style.fontSize = `${fontSize}rem`

  const indexRandom = Math.floor(Math.random() * messages.length)

  buttonNo.textContent = messages[indexRandom]
})

buttonYes.addEventListener('click', () => {
  document.querySelector('#message').style.display = 'flex'
})

document.getElementById("yes").addEventListener("click", function () {
  // Ocultar los botones originales
  document.querySelector(".options").style.display = "none";

  // Mostrar el mensaje "Siempre supe que dirías que sí"
  document.getElementById("message").style.display = "block";

  // Crear el nuevo botón "Abrir carta"
  const newButton = document.createElement("button");
  newButton.textContent = "Abrir carta";
  newButton.id = "openLetter";
  newButton.classList.add("styled-button"); // Agregar la clase de estilo

  // Agregar el botón debajo del mensaje
  document.getElementById("message").appendChild(newButton);

  // Evento para abrir otra página cuando se presiona "Abrir carta"
  newButton.addEventListener("click", function () {
    window.location.href = "yes.html"; // Redirige a otra página
  });
});
