/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game { //Here the game class is declared.
    constructor() { // The constructor method was created here with the properties missed, phrases, and activePhrase.
        this.missed = 0;
        this.phrases = [
             new Phrase("Im walking on sunshine"),
             new Phrase("Gimme the loot"),
             new Phrase("Stop Drop Roll"),
             new Phrase("Show me the money"),
             new Phrase("It all gets better with time")

        ];
        this.activePhrase ="null";
        
    }
    getRandomPhrase() {
        let phraseIndex = Math.floor(Math.random() * (this.phrases.length));
        return this.phrases[phraseIndex];
      }
}
