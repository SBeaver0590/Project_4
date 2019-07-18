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
        let showLength = $('.show').length;
        let letterLength = $('.letter').length;
        if(showLength === letterLength) {
            this.gameOver(true);
        }

    }

    removeLife() {
       
        $('.tries img[src="images/liveHeart.png"]:first').attr('src', 'images/lostHeart.png', 'missed.tries');
    //     if('this.missed' > 4++){
    //         gameOver(true);
    // }
        if(this.missed == 4) {
            this.gameOver(false);
        }else
        this.missed++;
    }

    handleInteraction(letter) {
        let button = 'button.key:contains('+letter+')';
        $(button).prop('disabled', true); 
        if (!this.activePhrase.checkLetter(letter)) {
            $(button).addClass('wrong');
            this.removeLife(); 
        }else{
        if (this.activePhrase.checkLetter(letter)) {
            $(button).addClass('chosen')
            this.activePhrase.showMatchedLetter(letter);
            this.checkForWin();
        }
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
