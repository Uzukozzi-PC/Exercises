//exercise_1: print a pyramid of hashtags (7 raws)
function exercise1() {

    let hashtag = "#";

    for (let counter = 1; counter <= 7; counter++)  {

        let raw = "";
        {
            for (let piramid = 1; piramid <= counter; piramid++){
            raw += hashtag;
            }

            console.log(raw);
        }
    }
}

exercise1();

//exercise_2: print numbers from 1 to 100, but for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
function exercise2() {

    let number = 1;

    for (let counter = 1; counter <= 100; counter++)  {

       if (counter % 3 == 0 && counter % 5 == 0) {
            number = "FizzBuzz";
        } else if (counter % 3 == 0) {
            number = "Fizz";
        } else if (counter % 5 == 0) {
            number = "Buzz";
        } else {
            number = counter;
        }
        
        console.log(number);
    }
}

exercise2();

//exercise_3: print a chessboard with variable size and height, using "#" and " " characters
function exercise3() {

    let size = Number(prompt("Please enter the size of the chessboard: "));
    let height = Number(prompt("Please enter the height of the chessboard: "));
    let chessboard = "";

    for (let raw = 1; raw <= size; raw++)  {
        for (let column = 1; column <= height; column++)  {
            if ((raw + column) % 2 == 0) {
                chessboard += "#";
            } else {
                chessboard += " ";
            }
        }
        chessboard += "\n";
    }
    console.log(chessboard);
}

exercise3();
