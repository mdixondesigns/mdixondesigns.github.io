let glasses = document.getElementById("deal-with-it");
let avatar = document.getElementById("avatar");

function dealwithit(){
  
  if(glasses.style.display == "none"){
    glasses.style.display = "block";
    avatar.style.filter = "grayscale(100%)"
  } else {
    glasses.style.display = "none";
    avatar.style.filter = "grayscale(0%)"
  }
}