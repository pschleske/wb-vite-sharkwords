const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function setupGuesses(element, handleGuess) {
  // loop over each letter in the alphabet string
  alphabet.split('').forEach((letter) => {
    // create a button element
    const btn = document.createElement('button');
    // Set its innerText so it displays a letter
    btn.innerText = letter;
    // attach the given event handler (handleguess) to the 'click' event
    btn.addEventListener('click', (e) => handleGuess(e, letter));
    // append the button to the given element
    element.append(btn);
  });
}

export default setupGuesses;

// The setupGuesses function will create a button for every letter in the alphabet and attach an event handler to it. When the user clicks on a button, it’ll trigger the button’s event handler function. The handleGuess function is called with two arguments: the event object and the letter that was guessed.