/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
// const phrase = new Phrase();

//   let phrase = new Phrase('I\'m walking on sunshine');

// game.phrases.forEach((phrase, index )=> {
//     console.log(`Phrase ${index} -phrase: ${phrase.phrase}`);
// });
// const logPhrase = (phrase) => {
//     console.log(`Phrases - phrases: `, phrase.phrase);
// };
// const game = new Game();
// const randomPhrase = game.getRandomPhrase();
// const phrase = new Phrase(randomPhrase.phrase);
// phrase.addPhraseToDisplay();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
// game.getRandomPhrase().addPhraseToDisplay();
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
let game;
$('#btn__reset').click(function(){
    game = new Game();
    game.startGame();
});
