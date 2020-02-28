const wordList = [
  'vis',
  'toeter',
  'developer',
  'telefoon',
  'moeder',
  'snoer',
  'geeuw'
];

console.log('test of ik wordList zie ', wordList);
console.log('1ste woord: ', wordList[0]);
console.log('lengte van wordList: ', wordList.length);

const randomWordPicker = function() {
  let index = Math.floor(Math.random() * wordList.length);
  console.log('dit is de index ', index);
  console.log('welk woord is gekozen', wordList[index]);
  return wordList[index];
};

randomWordPicker();

module.exports = randomWordPicker;
