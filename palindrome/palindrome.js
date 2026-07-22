let word = String(prompt("Please enter the word: "));
let numberOfLetters = word.length;

function isPalindrome(word) {
    let lettersArray = word.split("");

    for (let i = 0; i < numberOfLetters / 2; i++) {
        if (lettersArray[i] !== lettersArray[numberOfLetters - 1 - i]) {
            return false;
        }
    }
    return true;
}

let result = isPalindrome(word);

if (result === false) {

    console.log(`The word "${word}" is not palindrome`);

} else {
    if (result === true && (numberOfLetters === 0 || numberOfLetters === 1)) {

        console.log(`The word "${word}" is palindrome but the trick works better if you type a word with more than one letter`);

    } else {

        console.log(`The word "${word}" is palindrome`);
    }
}
