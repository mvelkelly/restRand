let restArr = ['🍸 Polite Provisions', '🥂 Small Bar', '🥤 Park & Rec', '⚽ Shakespeares Pub', '🍺 Fall Brewery', '🍺 Mike Hess'];
let math = Math.floor(Math.random() * restArr.length-1) + 1;
let randRest = restArr[math];
let runBtn = document.querySelector("button");

document.getElementById("restaurant").innerHTML = randRest;

//adding event listener
runBtn.addEventListener("click", function() {
  window.location.reload();
})
