// checken of een letter voorkomt in het woord
// waar komt letter vandaan? => input van speler
// waar komt woord vandaan? => randomWordPicker
const letterInput = require('./lettercheck.js');
const randomWord = require('./lettercheck.js');

test('is letterInput in randomWord', function() {
  expect(randomWord).toContain(letterInput);
});

// test('is letterInput in randomWord', function() {
//   const letterInput = 'r';
//   const randomWord = 'raimon';
//   expect(randomWord).toContain(letterInput);
// });
