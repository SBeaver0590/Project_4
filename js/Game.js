/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game { //Here the game class is declared.
    constructor() { // The constructor method was created here with the properties missed, phrases, and activePhrase.
        this.missed = 0;
        this.phrases = [
             {'phrase': "I\'m walking on sunshine"},
             {'phrase':"Gimme the loot"},
             {'phrase':"Stop \, Drop\, Roll"},
             {'phrase':"Show me the money"},
             {'phrase':"It all gets better with time"}

        ];
        this.activePhrase ="null";
        
    }

}
