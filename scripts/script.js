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
    const numberofBlocks = Number($userInput) * Number($userInput);
    currentFunction = setDarkFillInColor;
    setBlockLimit();
    displayGridDimensions();

    $gridContainer.css(
      'grid-template-columns',
      `repeat(${$userInput}, 1fr)`
    );

    $gridContainer.css(
      'grid-template-rows',
      `repeat(${$userInput}, 1fr)`
    );

    for (let i = 0; i < numberofBlocks; i++) {
      const $blockDiv = $('<div>').addClass('grid-block');
      $blockDiv.attr('data-type', 'block');
      $gridContainer.append($blockDiv);

      $blockDiv.mouseover(currentFunction);
    }
  };

  const setBlockLimit = function() {
    if (
    !$userInput
    || $userInput > 100
    || $userInput < 1
    || Number($userInput) * Number($userInput) === NaN
    ) {
      $userInput = 16;
      $promptText.text('That\'s no good! Please enter a number between 1 \
      and 100.');
    }
  };4

  const resetBlockGrid = function() {
    const $gridBlocks = $('div.grid-block');
    $gridBlocks.remove();
  };

  const displayGridDimensions = function() {
    $dimensions.text(`Your grid is now: ${$userInput} x ${$userInput}`);
  };

  const refreshPage = function() {
    location.reload();
  };

  const setDarkFillInColor = function() {
    $(this).css('background-color', 'rgb(53, 53, 53)');
  };

  const setWhiteBackground = function() {
    $(this).css('background-color', '#FFFFFF');
  };

  const generateRandomColor = function() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    $(this).css('background-color', `rgb(${x}, ${y}, ${z})`);
  };

  const generateGradient = function() {
    $(this).css('background-color', 'rgb(53, 53, 53)');
    $(this).css('opacity', '-0.1');
  };

  const applyPenToBlocks = function(styleFunction) {
    const $myBlocks = $('[data-type=block]');
    for (const block in $myBlocks) {
      $($myBlocks[block]).off('mouseover', currentFunction);
      $($myBlocks[block]).mouseover(styleFunction);
    }
  };

  createBlockGrid();

  // Event Listeners!

  $refreshPageButton.click(() => {
    refreshPage();
  });

  $refreshBlocksButton.click(() => {
    resetBlockGrid();
    createBlockGrid();
  });

  $eraserButton.click(() => {
    applyPenToBlocks(setWhiteBackground);
  });

  $randomColorButton.click(() => {
    applyPenToBlocks(generateRandomColor);
  });

  $gradientButton.click(() => {
    applyPenToBlocks(generateGradient);
  });

});