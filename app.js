// Init on DOM load
document.addEventListener("DOMContentLoaded",init);




//  ES6 Class

class TypeWriter {
    constructor(txtElement, words, wait = 300) {

        this.txtElement = txtElement;
        this.words = words;
        this.txt = "";
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }
    //  type method
    type() {
        // current index of word
        const current = this.wordIndex % this.words.length;
        // get the full text of current words
        
        const fullTxt = this.words[current];
        // check if deleting
        if (this.isDeleting) {
            // remove char
            this.txt = fullTxt.substring(0, this.txt.length - 1);

        } else {
            // add char
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
        // inser txt into element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
        setTimeout(() => this.type(), 500);
    }
}



// init App
function init(){
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    new TypeWriter(txtElement,words,wait);
    console.log('HELLOW')
}


