var randomNum = Math.floor(Math.random() * 10) ;
var restArr   = [ "🍜 Plumeria", "🍕 Zia's", "🥪Goi Cuon?", "🍲 Thai Joint", "🍣 North Park Sushi", "🌮 El Zarape", "☕ Pappalecos", "🍕 The Haven", "🍓 Fruteria", "🌮 City Taco"];
var randRest  = restArr[randomNum];
var runBtn    = document.querySelector("button");

//
document.querySelector("#restaurant").innerHTML = randRest;

//button selector to refresh page
runBtn.addEventListener("click", function() {
  window.location.reload();
});
