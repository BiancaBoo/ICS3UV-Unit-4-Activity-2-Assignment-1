// Author: Bianca Boo
// Version: 1.0.0
// Date: 2025-12-02
// Fileoverview: This sums integers within a set range.

package main

import "fmt"

func main() {
	startRange := 0
	endRange := 0
	num := 0
	sumInside := 0
	sumOutside := 0

	// Input start and end of range
	fmt.Print("Enter an integer for the start of the range: ")
	fmt.Scanln(&startRange)

	fmt.Print("Enter an integer for the end of the range: ")
	fmt.Scanln(&endRange)

	// Input loop
	for {
			fmt.Print("Enter an integer or zero (0) to end: ")
			fmt.Scanln(&num)

			// Stop if zero entered
			if num == 0 {
				break
			}

			// Check if number is inside or outside range
			if num >= startRange && num <= endRange {
				sumInside += num
			} else {
				sumOutside += num
			}
	}

	// Output results
	fmt.Println("The sum of the integers inside the range is", sumInside)
	fmt.Println("The sum of the integers outside the range is", sumOutside)

	fmt.Println("\nDone.")
}
