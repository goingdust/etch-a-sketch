$(document).ready(function () {
  const $gridContainer = $('.container');
  const $quantityInput = $('.quantity');
  const $refreshPageButton = $('.refresh');
  const $dimensions = $('.dimensions');
  const $refreshBlocksButton = $('.start-over');
  const $eraserButton = $('.eraser');
  const $randomColorButton = $('.random-color');
  const $gradientButton = $('.gradient');
  const $promptText = $('.prompt');
  let $userInput = $quantityInput.val();
  let currentFunction;

  // Functions!

  const createBlockGrid = function() {
    const numberofBlocks = $userInput * $userInput;
    currentFunction = setDarkFillInColor;
    setBlockLimit();
    displayGridDimensions();

    $gridContainer.prop(
      'grid-template-columns',
      `repeat(${$userInput}, 1fr)`
    );

    $gridContainer.prop(
      'grid-template-rows',
      `repeat(${$userInput}, 1fr)`
    );

    for (let i = 0; i < numberofBlocks; i++) {
      const $blockDiv = $('<div>');
      $blockDiv.attr('data-type', 'block');
      $blockDiv.prop('background-color', 'rgba(255, 150, 150, 0.144)');
      $gridContainer.append($blockDiv);

      $blockDiv.mouseover(currentFunction);
    }
  }

  const setBlockLimit = function() {
    if (
    !$userInput
    || $userInput > 100
    || $userInput < 1
    || typeof $userInput !== typeof 1
    ) {
      $userInput = 16;
      $promptText.text('That\'s no good! Please enter a number between 1 \
      and 100.');
    }
  }

  const resetBlockGrid = function() {
    while ($gridContainer.first()) {
      $gridContainer.remove($gridContainer.first());
    }
  }

  const displayGridDimensions = function() {
    $dimensions.text(`Your grid is now: ${$userInput} x ${$userInput}`);
  }

  const refreshPage = function() {
    location.reload();
  }

  const setDarkFillInColor = function() {
    (this).style.backgroundColor = 'rgb(53, 53, 53)';
  }

  const setPinkBackground = function() {
    (this).style.backgroundColor = 'rgba(255, 150, 150, 0.144)';
  }

  const generateRandomColor = function() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    (this).style.backgroundColor = `rgb(${x}, ${y}, ${z})`;
  }

  const generateGradient = function() {
    (this).style.backgroundColor = 'rgb(53, 53, 53)';
    (this).style.opacity -= '-0.1';
  }

  createBlockGrid();

  // Event Listeners!

  $refreshPageButton.click(() => {
    refreshPage();
  });

  $refreshBlocksButton.click(() => {
    resetBlockGrid();
    createBlockGrid();
  });

  $eraserButton.addEventListener('click', () => {
    const $myBlocks = $('[data-type=block]');
    for (let i = 0; i < $myBlocks.length; i++) {
      $myBlocks[i].off('mouseover', currentFunction);
      $myBlocks[i].mouseover(setPinkBackground());
    }
  });

  $randomColorButton.addEventListener('click', () => {
    const $myBlocks = $('[data-type=block]');
    for (let i = 0; i < $myBlocks.length; i++) {
      $myBlocks[i].off('mouseover', currentFunction);
      $myBlocks[i].mouseover(generateRandomColor);
    }
  });

  $gradientButton.addEventListener('click', () => {
    const $myBlocks = $('[data-type=block]');
    for (let i = 0; i < $myBlocks.length; i++) {
      $myBlocks[i].off('mouseover', currentFunction);
      $myBlocks[i].mouseover(generateGradient);
    }
  });

});