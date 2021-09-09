const gridContainer = document.querySelector('.container');
const blocks = document.querySelector('div');
const quantity = document.querySelector('.quantity');
const refresh = document.querySelector('.refresh');
const prompt = document.querySelector('.prompt');
let userInput = quantity.value;

function createBlockGrid() {
  const numberofBlocks = userInput * userInput;
  gridContainer.style.setProperty(
    'grid-template-columns', 
    `repeat(${userInput}, 1fr)`
    );

  gridContainer.style.setProperty(
    'grid-template-rows', 
    `repeat(${userInput}, 1fr)`
    );

  for (let i = 0; i < numberofBlocks; i++) {
    let blockDiv = document.createElement('div');
    blockDiv.className = 'block';
    gridContainer.append(blockDiv);
  }
}

function setBlockLimit() {
  if (userInput > 100 || userInput < 1 || userInput == null) {
    userInput = 16;
    quantity.value = 16;
    prompt.textContent = 'That\'s no good! Please enter a number between 1 \
    and 100.';
  }
}

function generateRandomColor() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let randomColor = "rgb(" + x + "," + y + "," + z + ")";
  return randomColor;
}
/*
blocks.addEventListener('mouseover', function (e) {
  e.target.classList.replace('block', 'color');
}); */

// To change the blocks into random colours!
blocks.classList.append('random-color');
const randomColorClass = document.querySelector('.random-color');
randomColorClass.style.setProperty(
  'background-color',
  `${generateRandomColor()}`
);

blocks.addEventListener('mouseover', function (e) {
  e.target.classList.replace('block', 'random-color');
});

refresh.addEventListener('click', () => location.reload());

setBlockLimit(userInput);
createBlockGrid();
