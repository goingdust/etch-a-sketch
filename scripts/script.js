const gridContainer = document.querySelector('.container');
const quantity = document.querySelector('.quantity');
const refreshPageButton = document.querySelector('.refresh');
const dimensions = document.querySelector('.dimensions');
const refreshBlocksButton = document.querySelector('.start-over');
const eraserButton = document.querySelector('.eraser');
const randomColorButton = document.querySelector('.random-color');
const gradientButton = document.querySelector('.gradient');
const prompt = document.querySelector('.prompt');
let userInput = quantity.value;
let currentFunction;

createBlockGrid();

// Functions!

function createBlockGrid() {
  const numberofBlocks = userInput * userInput;
  currentFunction = setDarkFillInColor;
  setBlockLimit();
  displayGridDimensions();

  gridContainer.style.setProperty(
    'grid-template-columns', 
    `repeat(${userInput}, 1fr)`
    );

  gridContainer.style.setProperty(
    'grid-template-rows', 
    `repeat(${userInput}, 1fr)`
    );

  for (let i = 0; i < numberofBlocks; i++) {
    const blockDiv = document.createElement('div');
    blockDiv.setAttribute('data-type', 'block');
    blockDiv.style.backgroundColor = 'rgba(255, 150, 150, 0.144)';
    gridContainer.append(blockDiv);

    blockDiv.addEventListener('mouseover', currentFunction);
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

function resetBlockGrid() {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
}

function displayGridDimensions() {
  dimensions.textContent = `Your grid is now: ${userInput} x ${userInput}`;
}

function refreshPage() {
  location.reload();
}

function setDarkFillInColor() {
  (this).style.backgroundColor = 'rgb(53, 53, 53)';
}

function setPinkBackground() {
  (this).style.backgroundColor = 'rgba(255, 150, 150, 0.144)';
}

function generateRandomColor() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  (this).style.backgroundColor = `rgb(${x}, ${y}, ${z})`;
}

function generateGradient() {
  (this).style.backgroundColor = 'rgb(53, 53, 53)';
  (this).style.opacity -= '-0.1';
}

// Event Listeners!

refreshPageButton.addEventListener('click', () => {
  refreshPage();
})

refreshBlocksButton.addEventListener('click', () => {
  resetBlockGrid();
  createBlockGrid();
});

eraserButton.addEventListener('click', () => {
  myBlocks = document.querySelectorAll('[data-type=block]');
  for (let i = 0; i < myBlocks.length; i++) {
    myBlocks[i].removeEventListener('mouseover', currentFunction);
    myBlocks[i].addEventListener('mouseover', setPinkBackground);
  }
});

randomColorButton.addEventListener('click', () => {
  myBlocks = document.querySelectorAll('[data-type=block]');
  for (let i = 0; i < myBlocks.length; i++) {
    myBlocks[i].removeEventListener('mouseover', currentFunction);
    myBlocks[i].addEventListener('mouseover', generateRandomColor);
  }
});

gradientButton.addEventListener('click', () => {
  myBlocks = document.querySelectorAll('[data-type=block]');
  for (let i = 0; i < myBlocks.length; i++) {
    myBlocks[i].removeEventListener('mouseover', currentFunction);
    myBlocks[i].addEventListener('mouseover', generateGradient);
  }
});
