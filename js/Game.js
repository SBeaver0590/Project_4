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
    getRandomPhrase() { // Here I called getRandomPhrase() to generate a random phrase from the index.
        let phraseIndex = Math.floor(Math.random() * (this.phrases.length));
        return this.phrases[phraseIndex];
    }


    startGame() { //This function hides the start game overlay to reveal the phrases and keys.
        $('#overlay').hide();
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    checkForWin() { //this checkForWin() checks to see if the player has guessed all letters associated with the current phrase.
        let showLength = $('.show').length;
        let letterLength = $('.letter').length;
        if (showLength === letterLength) {
            this.gameOver(true);
        }

    }

    removeLife() { // removeLife() eliminates a heart if you guess the wrong letter, and ends the game if you guess wrong 5 times.

        $('.tries img[src="images/liveHeart.png"]:first').attr('src', 'images/lostHeart.png', 'missed.tries');
        //     if('this.missed' > 4++){
        //         gameOver(true);
        // }
        if (this.missed == 4) {
            this.gameOver(false);
        } else
            this.missed++;
    }

    handleInteraction(letter) { // Handles all the things the user does to win the game/lose the game i.e. showing the right/wrong buttons chosen.
        let button = 'button.key:contains(' + letter + ')';
        $(button).prop('disabled', true);
        if (!this.activePhrase.checkLetter(letter)) {
            $(button).addClass('wrong');
            this.removeLife();
        } else {
            $(button).addClass('chosen');
            this.activePhrase.showMatchedLetter(letter);
            if (this.checkForWin(true)) {
                this.gameOver();
            }
        }
    };

    gameOver(theyWon) { // This states that the user wins if all guesses are right you win and you win overlay shows vice versa. Then all is reset.
        $('#overlay').show();
        if (theyWon) {
            $('#overlay').addClass('win').removeClass('lose');
            $('#game-over-message').text('Congratulations, You Won!');
        } else {
            $('#overlay').addClass('lose').removeClass('win');
            $('#game-over-message').text('Better Luck next, Give It Another Try!');
        }
        this.activePhrase = ''
        $('#phrase ul li').remove();
        $('.key').removeAttr('disabled', true).removeClass('chosen').removeClass('wrong');
        $(".tries img").attr("src", "images/liveHeart.png");
    }
};