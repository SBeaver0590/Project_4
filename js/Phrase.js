/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase { //Phrase class object
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    addPhraseToDisplay() {
        let phraseUl = document.getElementsByTagName("ul");
        for (let i = 0; i < this.phrase.length; i++) {
            let li = document.createElement("li");
            if (this.phrase[i] == ' ') {
                li.classList.add("space");
                let space = document.createTextNode(" ");
                li.appendChild(space);
            } else {
                li.classList.add("hide");
                li.classList.add("letter");
                li.classList.add(this.phrase[i]);
                let letter = document.createTextNode(this.phrase[i]);
                li.appendChild(letter);
            }
            phraseUl[0].appendChild(li);
        }
    }
    checkLetter(letter) { // checks to see if the letter you chose matches the hidden letter from the phrase
        if (this.phrase.includes(letter)) {
            return true;
        } else {
            return false;
        }

    }
    showMatchedLetter(letter) { // Shows the hidden letter you chose that matches. 
        $('.letter.' + letter).removeClass('hide').addClass('show');
    }

};