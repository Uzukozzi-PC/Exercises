//exercise_1: write a function Math.min
function min(a, b) {
    return Math.min(a, b);
}

console.log(min(0, 10));
console.log(min(0, -10));

//exercise_2: recursive function isEven to accept a positive nuumber and return a Boolean value indicating whether the number is even or not
function isEven(n) {
    if (n < 0) {
        return false;
    }
    if (n === 0) {
        return true;
    }
    return isEven(n - 2);
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));

//exercise_3: write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters are in the string. Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted. Rewrite countBs to make use of this new function.
function countBs(string) {
    return countChar(string, "B");
}

function countChar(string, char) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) {
            count++;
        }
    }
    return count;
}

console.log(countBs("BOB"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
