/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
// const phrase = new Phrase();
const game = new Game();
//   let phrase = new Phrase('I\'m walking on sunshine');

game.phrases.forEach((phrase, index )=> {
    console.log(`Phrase ${index} -phrase: ${phrase.phrase}`);
});