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
        this.activePhrase = null;

    }
    getRandomPhrase() {
        let phraseIndex = Math.floor(Math.random() * (this.phrases.length));
        return this.phrases[phraseIndex];
    }


    startGame() {
        $('#overlay').hide();
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    checkForWin() {
        return $('.letter.hide').length === 0;
    }

    removeLife() {
        $('.tries img[src="images/liveHeart.png"]:first').attr('src', 'images/lostHeart.png');
        //$('.tries' ).find('liveHeart.png').replaceWith('lostHeart.png');
        //$('#scoreboard').find(this.missed).replaceWith('lostHeart.png');
    }

    handleInteraction(letter) {
        let button = 'button.key:contains('+letter+')';
        $(button).prop('disabled', true); 
        if (!$(this.activePhrase.checkLetter(letter))) {
            $(button).addClass('.wrong');
            this.removeLife(); 
        } else {
            $(button).addClass('.chosen')
            this.activePhrase.showMatchedLetter(letter);
        }
    }
    
    gameOver(theyWon) {
        if (theyWon) {
            $('#overlay').addClass('win').removeClass('lose');
            $('#game-over-message').text('Congratulations, You Won!');
        } else {
            $('#overlay').addClass('lose').removeClass('win');
            $('#game-over-message').text('Better Luck next, Give It Another Try!');
        }
        $('#overlay').show();
        return true;
    }

};
