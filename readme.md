# JS Puzzles

![image](./js-puzzles.png)

A Javascript code challenge game.

## Code Challenges

###### 1. Reverse Consonants

Write a function that returns any string passed to it in reverse, minus it's vowels (a, e, i, o, and u).

###### 2. FizzBuzzish

Write a function that returns the word 'Fizz' if a number passed in is divisible by three, 'Buzz' if a number passed in is divisible by five and 'FizzBuzz' if a number passed in is divisible by both three and five and the string 'What?' if it's not a number.

###### 3. Odds and Evens

Write a function that returns whatever string is passed in but where every even character is uppercase and every odd character is lowercase.

###### 4. Does a Body Good

Write a function that returns the string 'does a body good' if the (case insensitive) text 'milk' appears anywhere in the string passed in and returns the string 'lactose intolerant?' if the text 'milk' is not present.

###### 5. Random Repeater

Write a function that generates a random number from 1 to 10 and returns whatever string is passed in repeated that number of times.

###### 6. Reverse Char Sorter

Write a function that takes all the characters in a string, removes the whitespace and returns all the characters in reverse alphanumerical order.

###### 7. Lucy

Write a function that returns 'I love Lucy' if the array passed in contains 'lucy', returns 'In the sky with diamonds' if an array passed in contains the values 'lucy' and 'diamonds', if none of these are present returns 'No Lucy right now, thanks'.

###### 8. Loser

Write a function that appends the characters 'baby' to the (case insensitive) characters 'Loser' wherever they show up in a string and returns the result.

###### 9. Is it Safe?

Write a function that subtracts all the values of an array (from left to right), returns the absolute value, rounds it up to it's nearest whole number and returns the 'is it safe?', repeated that number of times.

###### 10. Month Rep

Write a function that returns the capitalized name of the current month as a string repeated an amount of times equal to the number that is passed in as a parameter.

###### 11. Vowel Snubber

Write a function that takes whatever string is passed to it and returns the same string minus all vowels and where every even word is uppercase and every odd word is lowercase.

###### 12. Valentine's Day

Write a function that takes a string and replaces any word ‘valentine’ with the word ‘heart’ and immediately flanks the text ‘LOVELOVE’ immediately before and after the word ‘day’.

###### 13. OMG Words

Write a function that takes a string and alphanumerically sorts each word in the string by it’s first character and appends the text ‘omg’ to each word and returns the new string of words, separated by a space.

###### 14. Smores

Write a function that checks if each value in an array is a number and if they are not return 'hungry', if they are all numbers then check if any are divisible by 6 and return ‘graham cracker’ for that array index, returns ‘marshmallow’ if it is divisible by 9 and ‘chocolate’ if the array item is divisible by both 6 and 9.  Then convert the array into a string where each element is divided by a space the text “yummy”.

###### 15. Type Checker

Write a function that checks if the value passed in is an array and returns the string “Ray gun” if it is, if the value passed in is an object returns “Obi-Wan”, if the value passed in is a string returns ‘Polly-o’ if the value passed in is a number returns ’Numbness’, if it’s a boolean returns ‘Wooly bully’, if it’s undefined returns ‘The undertaker’.

###### 16. Cupcake Candy Cane

Write a function that checks if the number passed in is NaN, if it is, it generates a random number from 1 to 5, creates an array of that many indexes and sets each index value to the string ‘Cupcake’, if it isn’t NaN, creates an array of that many indexes and sets each index value to the string ‘Candy cane'.

###### 17. Milkshake Jelly

Write a function that checks an array to be sure it is made up of strings, then checks to see if any values contain the characters ‘Jelly’ and if they do do it should return an array that adds 5 spaces before and after the word.  It should also check if there are any strings with the value ‘Milkshake’ that have any flanking whitespace and remove said white space before and after the string and return the new array.  Otherwise it should just return the original array.

###### 18. The Aviator

Write a function that takes two arguments that are strings, combines them together into one string, then return a new array that contains values where the first index contains all numbers present, the second index contains all uppercase vowels present, the third index contains all lowercase vowels present, the fourth index contains all uppercase consonants present and the fifth index contains all lowercase consonants present.  In addition, all values should be alphanumerically sorted.

###### 19. Stutter

Write a function that takes a string and for every word with two or more characters copies it’s first two characters and prepends those characters to the beginning of that word and for every word with only one character copies that character and prepends it to that character, return the new string.

###### 20. Taste the Rainbow

Write a function that takes a string and checks whether it contains ‘red’, ‘orange’, yellow’, ‘green’, ‘blue’, or ‘purple’ and returns an array containing only the remaining colors in the list, in any order if any colors is present.  If none of these colors are present in the string return an array with one string value set to ‘taste the rainbow’.

###### 21. Inner Strip

Write a function that takes an html tag in a string and returns only the innerHTML as a string.

###### 22. Char Sort Reverse

Write a function that takes each character in a string, returns an array of each characters character code, puts the array back together as a string and sorts that string alphanumerically and then reverses it.

###### 23. Number Bouncer

Write a function that checks if the number coming in is the largest possible number in JavaScript and returns the string ‘pretty big number dude’, and if the number is the smallest possible number in JavaScript returns ‘pretty small number dude’, if it’s positive infinity returns ‘I love infinity’ if it’s negative infinity returns ‘Weird but cool, negative infinity is cool', any other number should return 'not cool bro, I want something better'.

###### 24. Frankenstring

Write a function that takes a string and turns each character into it’s character code, then puts the character codes back together as a string, then go through each single digit number and find it’s corresponding character from it’s character code and construct a new string.

###### 25. Camel Chars

Write a function that takes a string, splits it in half (if it's odd, round it down) and make the first half lowercase and whatever is left over half uppercase.

###### 26. I Love Vowels

Write a function that returns any string passed to it, but wherever vowels (a, e, i, o and u) are present replace that vowel with five of those vowels.

###### 27. Catfish

Write a function that returns the word 'Cat' if a number passed in is divisible by four, 'Fish' if a number passed in is divisible by five and 'CatFish' if a number passed in is divisible by both four and five and the string 'Sushi please' if it's not a number.

###### 28. Weird Words

Write a function that returns whatever string is passed in but where every odd word is uppercase and every even word is lowercase.

###### 29. Rice Milk

Write a function that returns the string 'how do you milk a grain of rice?' if the (case insensitive) text 'rice milk' appears anywhere in the string passed in and returns the string 'Almond milk?' if the text 'rice milk' is not present.

###### 30. Only Lower Case

Write a function that takes a string and generates a random number from 1 to 10 and returns an array of that randomly generated numbers length containing nothing but whatever string has been passed in minus any uppercase characters that might be present in the string.

###### 31. Alice

Write a function that returns 'Which Alice?' if the array passed in contains 'Alice', 'Coffee' if an array passed in contains the values 'Alice' and 'Dilbert', if none of these are present returns 'Alice is not home can you please leave a message?'.

###### 32. Hip Hop

Write a function that appends the characters 'hop' to the (case insensitive) characters 'hip' wherever they show up in a string and returns the result.

###### 33. Peanut Butter Jelly Time

Write a function that subtracts all the values of an array (from right to left), returns the absolute value, rounds it up to it's nearest whole number and returns the 'peanut butter jelly time!', repeated that number of times.

###### 34. Outer Strip

Write a function that takes an html tag in a string and returns only the tag, as a string.

###### 35. I Hate Vowels

Write a function that returns any string passed to it, but wherever 'a' is present, replace it with '@', wherever 'e' is present replace it with '3', wherever 'i' is present, replace it with '1' and wherever 'o' is present replace it with '0' and where 'u' is present, replace it with 'v'.

###### 36. Bubble Bobble

Write a function that returns the word 'Bubble' if a number passed in is divisible by nine, 'Bobble' if a number passed in is divisible by twelve and 'BubbleBobble' if a number passed in is divisible by both nine and twelve and the string 'Pop the bubble' if it's not a number or is not divisble by 9 or 12.

###### 37. Ain't Nobody Got Time for That

Write a function that takes string containing an html opening and closing tag with innerHTML and returns the same opening and closing tags with the inner html stripped out and replaced with 'nobody got time for that'.

###### 38. String Bouncer

Write a function that checks whether an incoming string contains html opening and closing tags and if it does, return the string 'great html bro', if it doesn't it should return 'nope, it has no opening and closing tags'.

###### 39. XFiles

Write a function that takes an incoming string and checks if it has the text 'alien' and returns the string 'I want to believe' if it is present and 'aliens do not exist' if the text is not present.

###### 40. Route 66

Write a function that returns the word 'Holy' if a number passed in is divisible by six, 'Moly' if a number passed in is divisible by eleven and 'HolyMoly' if a number passed in is divisible by both six and eleven and the string 'What the heck is this?' if it's not a number or is not divisible by 6 or 11.

## License

(c) 2018 Allan Sachs-Ambia. | Code released under the [MIT License.](https://github.com/allansachsambia/jytr/blob/master/LICENSE.md)
