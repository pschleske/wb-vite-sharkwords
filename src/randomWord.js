import sample from "lodash.sample";

const words = [
  'strawberry',
  'orange',
  'apple',
  'banana',
  'pineapple',
  'kiwi',
  'peach',
  'pecan',
  'eggplant',
  'durian',
  'peanut',
  'chocolate',
];

function getRandomWord() {
  return sample(words)
}

// getRandomWord()

export default getRandomWord;
