let arr  = ['🥓 North Park Eatery', '☕ Dark Horse', '🍪 Sunny Boy Biscuit', '🌴🌴 Dos Palmas', '⛈️ Balboa Perk', '🥐 French Bakery'];
let math = Math.floor(Math.random() * arr.length-1) + 1;
let randomizer = arr[math];
let runBtn = document.querySelector("button");

 let domSelector = document.getElementById("restaurant").innerHTML = randomizer;


// Add eventlistener for button randomizer
runBtn.addEventListener("click", function() {
    window.location.reload();
})
