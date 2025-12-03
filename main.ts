/**
 * @author Bianca Boo
 * @version 1.0.0
 * @date 2025-12-02
 * @fileoverview This program sums integers within a set range.
 */

// variables
let startRangeString: string = "";
let endRangeString: string = "";
let numString: string = "";
let startRange: number = 0;
let endRange: number = 0;
let num: number = 0;
let sumInside: number = 0;
let sumOutside: number = 0;

// Input start and end of range
startRangeString = prompt("Enter an integer for the start of the range:") || "0";
startRange = parseInt(startRangeString);

endRangeString = prompt("Enter an integer for the end of the range:") || "0";
endRange = parseInt(endRangeString);

// Do-while loop to enter numbers
do {
  numString = prompt("Enter an integer or zero (0) to end:") || "0";
  num = parseInt(numString);

  // Only check numbers that are not zero
  if (num !== 0) {
    if (num >= startRange && num <= endRange) {
      sumInside += num;
    } else {
      sumOutside += num;
    }
  }

} while (num !== 0); 

// Output 
console.log("The sum of the integers inside the range is " + sumInside);
console.log("The sum of the integers outside the range is " + sumOutside);

console.log("Done.");