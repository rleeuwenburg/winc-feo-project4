const randomWordPicker = require('./wordpicker.js');

// onderstaande test of er in ieder geval iets is gekozen, maar nog niet of deze ook in de lijst voorkomt.
test('something was picked', () => {
  expect(randomWordPicker()).toBeDefined();
});

// we willen testen of er (random) een woord gekozen is dat voorkomt in de woordenlijst
test('what was picked, is contained within the list of words', () => {
  const wordList = [
    'vis',
    'toeter',
    'developer',
    'telefoon',
    'moeder',
    'snoer',
    'geeuw'
  ];
  const pickedWord = randomWordPicker();
  expect(wordList).toContain(pickedWord);
});
