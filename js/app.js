/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
// const phrase = new Phrase();

//   let phrase = new Phrase('I\'m walking on sunshine');

// game.phrases.forEach((phrase, index )=> {
//     console.log(`Phrase ${index} -phrase: ${phrase.phrase}`);
// });
const logPhrase = (phrase) => {
    console.log(`Phrases - phrases: `, phrase.phrase);
};
const game = new Game();
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
