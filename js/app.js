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
//const game = new Game();
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

$('.keyrow .key').click(function(e){
    //console.log(e.target.innerText);
    game.handleInteraction(e.target.innerText
    );
});



// // Sets up click behavior on all button elements with the alert class
//     // that exist in the DOM when the instruction was executed
//     $( "button.alert" ).on( "click", function() {
//         console.log( "A button with the alert class was clicked!" );
//     });
 
//     // Now create a new button element with the alert class. This button
//     // was created after the click listeners were applied above, so it
//     // will not have the same click behavior as its peers
//     $( "<button class='alert'>Alert!</button>" ).appendTo( document.body );
// });