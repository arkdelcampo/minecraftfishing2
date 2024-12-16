// Functionize Minecraft Fishing Start Code

// HTML Variables
let resultImg = document.getElementById("result-img");
let numCodSpan = document.getElementById("num-cod");
let numSalmonSpan = document.getElementById("num-salmon");
let numTropicalSpan = document.getElementById("num-tropical");
let numPufferSpan = document.getElementById("num-puffer");

let plus5Btn = document.getElementById("plus5");
let until200Btn = document.getElementById("until200");
let customNumBtn = document.getElementById("customNum-btn");

let inventory = document.getElementById("fishInv");
let sortFishBtn = document.getElementById("sortFish");

// Fish count variables
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// Fish images
let rawCodImg = "img/Raw-Cod.png";
let rawSalmonImg = "img/Raw-Salmon.png";
let tropicalFishImg = "img/Tropical-Fish.png";
let PufferImg = "img/Pufferfish.png";

// Fish Button Event Listener
document.getElementById("fish-btn").addEventListener("click", fishBtnClicked);

plus5Btn.addEventListener("click", plus5);
until200Btn.addEventListener("click", until200);
customNumBtn.addEventListener("click", customNum);

sortFishBtn.addEventListener("click", sortFish);

function fishBtnClicked() {
  // Determine Selected Character
  let char = document.getElementById("character-select").value;
  console.log(char);
  if (char === "steve") {
    // Steve Fish Simulator
    let randNum = Math.random();
    console.log(randNum);
    if (randNum < 0.7) {
      resultImg.src = rawCodImg;
      numCod++;
      numCodSpan.innerHTML = numCod;
      inventory.innerHTML +=
        '<img class="fishImg" src="img/Raw-Cod.png" alt="Raw Cod"></img>';
    } else if (randNum < 0.9) {
      resultImg.src = rawSalmonImg;
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
      inventory.innerHTML +=
        '<img class="fishImg" src="img/Raw-Salmon.png" alt="Raw Salmon"></img>';
    } else if (randNum < 0.95) {
      resultImg.src = tropicalFishImg;
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
      inventory.innerHTML +=
        '<img class="fishImg" src="img/Tropical-Fish.png" alt="Tropical Fish"></img>';
    } else {
      resultImg.src = PufferImg;
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
      inventory.innerHTML +=
        '<img class="fishImg" src="img/Pufferfish.png" alt="Puffer"></img>';
    }
  } else if (char === "alex") {
    // Alex Fish Simulator
    let randNum = Math.random();
    console.log(randNum);
    if (randNum < 0.1) {
      resultImg.src = "img/Raw-Cod.png";
      numCod++;
      numCodSpan.innerHTML = numCod;
    } else if (randNum < 0.2) {
      resultImg.src = "img/Raw-Salmon.png";
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
    } else if (randNum < 0.5) {
      resultImg.src = "img/Tropical-Fish.png";
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
    } else {
      resultImg.src = "img/Pufferfish.png";
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
    }
  } else if (char === "villager") {
    // Villager Fish Simulator
    let randNum = Math.random();
    console.log(randNum);
    if (randNum < 0.25) {
      resultImg.src = "img/Raw-Cod.png";
      numCod++;
      numCodSpan.innerHTML = numCod;
    } else if (randNum < 0.5) {
      resultImg.src = "img/Raw-Salmon.png";
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
    } else if (randNum < 0.75) {
      resultImg.src = "img/Tropical-Fish.png";
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
    } else {
      resultImg.src = "img/Pufferfish.png";
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
    }
  }
}

function plus5() {
  for (let i = 1; i <= 5; i++) {
    fishBtnClicked();
  }
}

function until200() {
  let codTarget = numCod + 200;
  let count = 0;
  while (numCod < codTarget) {
    fishBtnClicked();
    count++;
  }
  console.log(count);
}

function customNum() {
  let target = document.getElementById("customNum").value;
  for (let i = 0; i < target; i++) {
    fishBtnClicked();
  }
}

function sortFish() {
  inventory.innerHTML = "";
  for (let i = 1; i <= numCod; i++) {
    inventory.innerHTML +=
      '<img class="fishImg" src="img/Raw-Cod.png" alt="Raw Cod"></img>';
  }
  for (let i = 1; i <= numSalmon; i++) {
    inventory.innerHTML +=
      '<img class="fishImg" src="img/Raw-Salmon.png" alt="Raw Salmon"></img>';
  }
  for (let i = 1; i <= numTropical; i++) {
    inventory.innerHTML +=
      '<img class="fishImg" src="img/Tropical-Fish.png" alt="Tropical Fish"></img>';
  }
  for (let i = 1; i <= numPuffer; i++) {
    inventory.innerHTML +=
      '<img class="fishImg" src="img/Pufferfish.png" alt="Puffer"></img>';
  }
}
