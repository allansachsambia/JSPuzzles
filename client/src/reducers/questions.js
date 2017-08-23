export default function() {
  return [
    {
      name: 'Reverse Consonants',
      code: `// Write a function that returns any string passed to it in reverse, minus it's vowels (a, e, i, o, and u).
function reverseConsonants(val) {
}`,
      answer: ''
    },
    {
      name: 'FizzBuzzish',
      code: `// Write a function that returns the word 'Fizz' if a number passed in is divisible by three, 'Buzz' if a number passed in is divisible by five and 'FizzBuzz' if a number passed in is divisible by both three and five and the string 'What?' if it's not a number.
function fizzBuzzish(val) {
}`,
      answer: ''
    },
    {
      name: 'Odds and Evens',
      code: `// Write a function that returns whatever string is passed in but where every even character is uppercase and every odd character is lowercase.
function oddsAndEvens (val) {
}`,
      answer: ''
    },
    {
      name: 'Does a Body Good',
      code: `// Write a function that returns the string 'does a body good' if the (case insensitive) text 'milk' appears anywhere in the string passed in and returns the string 'lactose intolerant?' if the text 'milk' is not present.
function doesABodyGood(val) {
}`,
      answer: ''
    },
    {
      name: 'Random Repeater',
      code: `// Write a function that generates a random number from 1 to 10 and returns whatever string is passed in repeated that number of times.
function randomRepeater(val) {
}`,
      answer: ''
    },
    {
      name: 'Reverse Char Sorter',
      code: `// Write a function that takes all the characters in a string, removes the whitespace and returns all the characters in reverse alphanumerical order.
function reverseCharSorter(val) {
}`,
      answer: ''
    },
    {
      name: 'Lucy',
      code: `// Write a function that returns 'I love Lucy' if the array passed in contains 'lucy', returns 'In the sky with diamonds' if an array passed in contains the values 'lucy' and 'diamonds', if none of these are present returns 'No Lucy right now, thanks'.
function lucy(val) {
}`,
      answer: ''
    },
    {
      name: 'Loser',
      code: `// Write a function that appends the characters 'baby' to the (case insensitive) characters 'Loser' wherever they show up in a string and returns the result.
function loser(val) {
}`,
      answer: ''
    },
    {
      name: 'Is it Safe?',
      code: `// Write a function that subtracts all the values of an array (from left to right), returns the absolute value, rounds it up to it's nearest whole number and returns the 'is it safe?', repeated that number of times.
function isItSafe(val) {
}`,
      answer: ''
    },
    {
      name: 'Month Rep',
      code: `// Write a function that returns the capitalized name of the current month as a string repeated an amount of times equal to the number that is passed in as a parameter.
function monthRep(val) {
}`,
      answer: ''
    },
    {
      name: 'Vowel Snubber',
      code: `// Write a function that takes whatever string is passed to it and returns the same string minus all vowels and where every even word is uppercase and every odd word is lowercase
function vowelSnubber(val) {
}`,
      answer: ''
    },
    {
      name: "Valentine's Day",
      code: `// Write a function that takes a string and replaces any word ‘valentine’ with the word ‘heart’ and immediately flanks the text ‘LOVELOVE’ immediately before and after the word ‘day’.
function valentinesDay(val) {
}`,
      answer: ''
    },
    {
      name: 'OMG Words',
      code: `// Write a function that takes a string and alphanumerically sorts each word in the string by it’s first character and appends the text ‘omg’ to each word and returns the new string of words, separated by a space.
function omgWords(val) {
}`,
      answer: ''
    },
    {
      name: 'Smores',
      code: `// Write a function that checks if each value in an array is a number and if they are not return 'hungry', if they are all numbers then check if any are divisible by 6 and return ‘graham cracker’ for that array index, returns ‘marshmallow’ if it is divisible by 9 and ‘chocolate’ if the array item is divisible by both 6 and 9.  Then convert the array into a string where each element is divided by the exact quote (including the whitespace padding) “ yummy ”.
function smores(val) {
}`,
      answer: ''
    },
    {
      name: 'Type Checker',
      code: `// Write a function that checks if the value passed in is an array and returns the string “Ray gun” if it is, if the value passed in is an object returns “Obi-Wan”, if the value passed in is a string returns ‘Polly-o’ if the value passed in is a number returns ’Numbness’, if it’s a boolean returns ‘Wooly bully’, if it’s undefined returns ‘The undertaker’.
function typeChecker(val) {
}`,
      answer: ''
    },
    {
      name: 'Cupcake Candy Cane',
      code: `// Write a function that checks if the number passed in is NaN, if it is, it generates a random number from 1 to 5, creates an array of that many indexes and sets each index value to the string ‘Cupcake’, if it isn’t NaN, creates an array of that many indexes and sets each index value to the string ‘Candy cane'.
function cupcakeCandyCane(val) {
}`,
      answer: ''
    },
    {
      name: 'Milkshake Jelly',
      code: `// Write a function that checks an array to be sure it is made up of strings, then checks to see if any values contain the characters ‘Jelly’ and if they do do it should return an array that adds 5 spaces before and after the word.  It should also check if there are any strings with the value ‘Milkshake’ that have any flanking whitespace and remove said white space before and after the string and return the new array.  Otherwise it should just return the original array.
function milkshakeJelly(val) {
}`,
      answer: ''
    },
    {
      name: 'The Aviator',
      code: `// Write a function that takes two arguments that are strings, combines them together into one string, then return a new array that contains values where the first index contains all numbers present, the second index contains all uppercase vowels present, the third index contains all lowercase vowels present, the fourth index contains all uppercase consonants present and the fifth index contains all lowercase consonants present.  In addition, all values should be alphanumerically sorted.
function theAviator(val1, val2) {
}`,
      answer: ''
    },
    {
      name: 'Stutter',
      code: `// Write a function that takes a string and for every word with two or more characters copies it’s first two characters and prepends those characters to the beginning of that word and for every word with only one character copies that character and prepends it to that character, return the new string.
function stutter(val) {
}`,
      answer: ''
    },
    {
      name: 'Taste the Rainbow',
      code: `// Write a function that takes a string and checks whether it contains ‘red’, ‘orange’, yellow’, ‘green’, ‘blue’, or ‘purple’ and returns an array containing only the remaining colors in the list, in any order if any colors is present.  If none of these colors are present in the string return an array with one string value set to ‘taste the rainbow’.
function tasteTheRainbow(val) {
}`,
      answer: ''
    },
    {
      name: 'Inner Strip',
      code: `// Write a function that takes opening and closing html tags in a string and returns only the innerHTML, as a string.
function innerStrip(val) {
}`,
      answer: ''
    },
    {
      name: 'Char Sort Reverse',
      code: `// Write a function that takes each character in a string, returns an array of each characters character code, puts the array back together as a string and sorts that string alphanumerically and then reverses it.
function charSortReverse(val) {
}`,
      answer: ''
    },
    {
      name: 'Number Bouncer',
      code: `// Write a function that checks if the number coming in is the largest possible number in JavaScript and returns the string ‘pretty big number dude’, and if the number is the smallest possible number in JavaScript returns ‘pretty small number dude’, if it’s positive infinity returns ‘I love infinity’ if it’s negative infinity returns ‘Weird but cool, negative infinity is cool', any other number should return 'not cool bro, I want something better'.
function numberBouncer(val) {
}`,
      answer: ''
    },
    {
      name: 'Frankenstring',
      code: `// Write a function that takes a string and turns each character into it’s character code, then puts the character codes back together as a string, then go through each single digit number and find it’s corresponding character from it’s character code and construct a new string.
function frankenstring(val) {
}`,
      answer: ''
    },
    {
      name: 'Camel Chars',
      code: `// Write a function that takes a string, splits it in half (if it's odd, round it down) and make the first half lowercase and whatever is left over half uppercase.
function camelChars(val) {
}`,
      answer: ''
    },
    {
      name: 'I Love Vowels',
      code: `// Write a function that returns any string passed to it, but wherever vowels (a, e, i, o and u) are present replace that vowel with five of those vowels.
function iLoveVowels(val) {
}`,
      answer: ''
    },
    {
      name: 'Catfish',
      code: `// Write a function that returns the word 'Cat' if a number passed in is divisible by four, 'Fish' if a number passed in is divisible by five and 'CatFish' if a number passed in is divisible by both four and five and the string 'Sushi please' if it's not a number.
function catfish(val) {
}`,
      answer: ''
    },
    {
      name: 'Weird Words',
      code: `// Write a function that returns whatever string is passed in but where every odd word is uppercase and every even word is lowercase.
function weirdWords(val) {
}`,
      answer: ''
    },
    {
      name: 'Rice Milk',
      code: `// Write a function that returns the string 'how do you milk a grain of rice?' if the (case insensitive) text 'rice milk' appears anywhere in the string passed in and returns the string 'Almond milk?' if the text 'rice milk' is not present.
function riceMilk(val) {
}`,
      answer: ''
    },
    {
      name: 'Only Lower Case',
      code: `// Write a function that takes a string and generates a random number from 1 to 10 and returns an array of that randomly generated numbers length containing nothing but whatever string has been passed in minus any uppercase characters that might be present in the string.
function onlyLowerCase(val) {
}`,
      answer: ''
    },
    {
      name: 'Alice',
      code: `// Write a function that returns 'Which Alice?' if the array passed in contains 'Alice', 'Coffee' if an array passed in contains the values 'Alice' and 'Dilbert', if none of these are present returns 'Alice is not home can you please leave a message?'.
function alice(val) {
}`,
      answer: ''
    },
    {
      name: 'Hip Hop',
      code: `// Write a function that appends the characters 'hop' to the (case insensitive) characters 'hip' wherever they show up in a string and returns the result.
function hipHop(val) {
}`,
      answer: ''
    },
    {
      name: 'Peanut Butter Jelly Time',
      code: `// Write a function that subtracts all the values of an array (from right to left), returns the absolute value, rounds it up to it's nearest whole number and returns the 'peanut butter jelly time!', repeated that number of times.
function peanutButterJellyTime(val) {
}`,
      answer: ''
    },
    {
      name: 'Outer Strip',
      code: `// Write a function that takes an html tag in a string and returns only the tag, as a string.
function outerStrip(val) {
}`,
      answer: ''
    },
    {
      name: 'I Hate Vowels',
      code: `// Write a function that returns any string passed to it, but wherever 'a' is present, replace it with '@', wherever 'e' is present replace it with '3', wherever 'i' is present, replace it with '1' and wherever 'o' is present replace it with '0' and where 'u' is present, replace it with 'v'.
function iHateVowels(val) {
}`,
      answer: ''
    },
    {
      name: 'Bubble Bobble',
      code: `// Write a function that returns the word 'Bubble' if a number passed in is divisible by nine, 'Bobble' if a number passed in is divisible by twelve and 'BubbleBobble' if a number passed in is divisible by both nine and twelve and the string 'Pop the bubble' if it's not a number or is not divisble by 9 or 12.
function bubbleBobble(val) {
}`,
      answer: ''
    },
    {
      name: "Ain't Nobody Got Time For That",
      code: `// Write a function that takes string containing an html opening and closing tag with innerHTML and returns the same opening and closing tags with the inner html stripped out and replaced with 'nobody got time for that'.
function aintNobodyGotTimeForThat(val) {
}`,
      answer: ''
    },
    {
      name: 'String Bouncer',
      code: `// Write a function that checks whether an incoming string contains html opening and closing tags and if it does, return the string 'great html bro', if it doesn't it should return 'nope, it has no opening and closing tags'.
function stringBouncer(val) {
}`,
      answer: ''
    },
    {
      name: 'X Files',
      code: `// Write a function that takes an incoming string and checks if it has the text 'alien' and returns the string 'I want to believe' if it is present and 'aliens do not exist' if the text is not present.
function xFiles(val) {
}`,
      answer: ''
    },
    {
      name: 'Route 66',
      code: `// Write a function that returns the word 'Holy' if a number passed in is divisible by six, 'Moly' if a number passed in is divisible by eleven and 'HolyMoly' if a number passed in is divisible by both six and eleven and the string 'What the heck is this?' if it's not a number or is not divisible by 6 or 11.
function route66(val) {
}`,
      answer: ''
    },
    {
      name: 'The End',
      code: '// You rock dude.'
    }
  ];
}
