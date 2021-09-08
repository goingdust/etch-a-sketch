const container = document.querySelector('.container');
const block = document.querySelector('div');
const quantity = document.querySelector('.quantity');
const refresh = document.querySelector('.refresh');
const prompt = document.querySelector('.prompt');
let userInput = quantity.value;

function createBlockGrid () {
  const numberofBlocks = userInput * userInput;
  container.style.setProperty(
    'grid-template-columns', 
    `repeat(${userInput}, 1fr)`
    );

  container.style.setProperty(
    'grid-template-rows', 
    `repeat(${userInput}, 1fr)`
    );

  for (let i = 0; i < numberofBlocks; i++) {
    let blockDiv = document.createElement('div');
    blockDiv.className = 'block';
    container.append(blockDiv);
  }
}

function setBlockLimit () {
  if (userInput > 100 || userInput < 1 || userInput == null) {
    userInput = 16;
    quantity.value = 16;
    prompt.textContent = 'That\'s no good! Please enter a number between 1 \
    and 100.';
  }
}

block.addEventListener('mouseover', function (e) {
  e.target.classList.replace('block', 'color');
});

refresh.addEventListener('click', () => location.reload());

setBlockLimit(userInput);
createBlockGrid();
