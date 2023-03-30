// Grab DOM elements for picture and glasses
const avatar = document.getElementById("avatar-container");

// Add event listener
avatar.addEventListener("click", dealwithit);

function dealwithit() {
  avatar.classList.toggle("deal-with-it");
}
