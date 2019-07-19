/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


// 
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
// let keyPressed = [];
$('#btn__reset').click(function () { //resets button on click

    game = new Game();
    game.startGame();
});

$('.keyrow .key').click(function (e) { // key interactivity.

//console.log(e.target.innerText);
game.handleInteraction(e.target.innerText);
});
document.addEventListener('keydown', function(event){ //allows user to use the keyboard to type their response.
    const keyPressed = event.key.toLowerCase();
    const validLetters = "abcdefghijklmnopqrstuvwxyz";
    const allKeys = document.getElementsByClassName("key");
    if(validLetters.includes(keyPressed)) {
        for(let key of allKeys) {
            if(key.innerText == keyPressed) {
                key.click();
            }
        }
    }   
});
// $(document).keyup((e) => { //supposed to give me the option to use the keyboard but isn't functional.
//     let keyPress = e.key;
//     if ($('#overlay').is(':visible')) {
//         e.preventDefault;
//     } 
//     else if (!keyPressed.includes(keyPress)) {
//         $('.keyrow .key').each((index, key) => {
//             if ($(key).text() === keyPress) {
//                 game.handleInteraction(key);
//             }
//         });
//         keyPressed.push(keyPress);
//     }
// });
// my other extra credit was done by adding a background in CSS.



