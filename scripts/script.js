const container = document.querySelector('.container');
const block = document.querySelector('div');
const form = document.querySelector('form');
const quantity = document.querySelector('.quantity');
const refresh = document.querySelector('button');
const prompt = document.querySelector('p');
const userInput = quantity.value;

container.style.setProperty(
  'grid-template-columns', 
  `repeat(${userInput}, 1fr)`
  );

container.style.setProperty(
  'grid-template-rows', 
  `repeat(${userInput}, 1fr)`
  );

function createBlockGrid () {
  const numberofBlocks = userInput * userInput;
  for (let i = 0; i < numberofBlocks; i++) {
    let blockDiv = document.createElement('div');
    blockDiv.className = 'block';
    container.append(blockDiv);
  }
}

function setBlockLimit () {
  if (userInput > 100 || userInput < 1) {
    userInput = 1;
    quantity.value = 1;
    return prompt.textContent = 'No good! Please enter a number between 1 \
    and 100.';
  }
}

function updateBlockGrid (e) {
  location.reload();
  prompt.textContent = 'LOADING';
  e.preventDefault();
}

block.addEventListener('mouseover', function (e) {
  e.target.classList.replace('block', 'color');
});

form.addEventListener('submit', updateBlockGrid);

setBlockLimit(userInput);
createBlockGrid();
