export default function () {
  return [
    {
      name: 'Reverse Consonants',
      solution: `// Write a function that returns any string passed to it in reverse, minus it's vowels (a, e, i, o, and u).
function reverseConsonants(val) {
  return val.split('').filter(item => item.replace(/(a|e|i|o|u)/gi, '')).reverse().join('');
}`,
    },


    {
      name: 'FizzBuzzish',
      solution: `// Write a function that returns the word 'Fizz' if a number passed in is divisible by three, 'Buzz' if a number passed in is divisible by five and 'FizzBuzz' if a number passed in is divisible by both three and five and the string 'What?' if it's not a number.
function fizzBuzzish(val) {
  if (val % 3 === 0 && val % 5 === 0) {
    return 'FizzBuzz';
  } else if (val % 5 === 0) {
    return 'Buzz';
  } else if (val % 3 === 0) {
    return 'Fizz';
  } else if (isNaN(val)) {
    return 'What?'
  }
}`,
    },


    {
      name: 'Odds and Evens',
      solution: `// Write a function that returns whatever string is passed in but where every even character is uppercase and every odd character is lowercase.
function oddsAndEvens (val) {
  return val.split('').map(function(char, i) {
    if (i % 2 === 0) {
      return char.toLowerCase();
    } else {
      return char.toUpperCase();
    }
  }).join('');
}`,
    },

    {
      name: 'Does a Body Good',
      solution: `// Write a function that returns the string 'does a body good' if the (case insensitive) text 'milk' appears anywhere in the string passed in and returns the string 'lactose intolerant?' if the text 'milk' is not present.
function doesABodyGood(val) {
  return val.match(/milk/gi) === null ? 'lactose intolerant?' : 'does a body good';
}`,
    },

    {
      name: 'Random Repeater',
      solution: `// Write a function that generates a random number from 1 to 10 and returns whatever string is passed in repeated that number of times.
function randomRepeater(val) {
  return val.repeat(Math.floor(Math.random() * 10 + 1));
}`,
    },

    {
      name: 'Reverse Char Sorter',
      solution: `// Write a function that takes all the characters in a string, removes the whitespace and returns all the characters in reverse alphanumerical order.
function reverseCharSorter(val) {
  return val.split('').filter((char) => {
    return char !== ' ';
  }).sort().reverse().join('');
}`,
    },

    {
      name: 'Lucy',
      solution: `// Write a function that returns 'I love Lucy' if the array passed in contains 'lucy', returns 'In the sky with diamonds' if an array passed in contains the values 'lucy' and 'diamonds', if none of these are present returns 'No Lucy right now, thanks'.
function lucy(val) {
  const containsLucy = val.some(value => value.match(/lucy/g));
  const containsDiamonds = val.some(value => value.match(/diamonds/g));
  if (containsLucy && containsDiamonds) {
    return 'In the sky with diamonds';
  } else if (containsLucy) {
    return 'I love Lucy';
  } else {
    return 'No Lucy right now, thanks';
  }
}`,
    },

    {
      name: 'Loser',
      solution: `// Write a function that appends the characters 'baby' to the (case insensitive) characters 'Loser' wherever they show up in a string and returns the result.
function loser(val) {
  return val.replace(/loser/gi, 'loserbaby');
}`,
    },

    {
      name: 'Is it Safe?',
      solution: `// Write a function that subtracts all the values of an array (from left to right), returns the absolute value, rounds it up to it's nearest whole number and returns the 'is it safe?', repeated that number of times.
function isItSafe(val) {
  const diff = val.reduce((t, n) =>  t - n);
  const abs = Math.ceil(Math.abs(diff));
  const str = 'is it safe?'.repeat(abs);
  return str;
}`,
    },

    {
      name: 'Month Rep',
      solution: `// Write a function that returns the capitalized name of the current month as a string repeated an amount of times equal to the number that is passed in as a parameter.
function monthRep(val) {
  const d = new Date();
  return d.toLocaleString("en-us", { month: "long" }).repeat(val);
}`,
    },

    {
      name: 'Vowel Snubber',
      solution: `// Write a function that takes whatever string is passed to it and returns the same string minus all vowels (a, e, i, o, u) and where every even word is uppercase and every odd word is lowercase.
function vowelSnubber(val) {
  return val.replace(/(a|e|i|o|u)/gi, '').split(' ').map((value, i) => {
    return (i % 2 === 0) ? value.toLowerCase() : value.toUpperCase();
  }).join(' ');
}`,
    },

    {
      name: `Valentine's Day`,
      solution: `// Write a function that takes a string and replaces any word ‘valentine’ with the word ‘heart’ and immediately flanks the text ‘LOVELOVE’ immediately before and after the word ‘day’.
function valentinesDay(val) {
  return val.replace(/valentine/g, 'heart').replace(/day/g, 'LOVELOVEdayLOVELOVE');
}`,
    },

    {
      name: 'OMG Words',
      solution: `// Write a function that takes a string and alphanumerically sorts each word in the string by it’s first character and appends the text ‘omg’ to each word and returns the new string of words, separated by a space.
function omgWords(val) {
  return val.split(' ').sort().map(word => word + 'omg').join(' ');
}`,
    },

    {
      name: 'Smores',
      solution: `// Write a function that checks if each value in an array is a number and if they are not return 'hungry', if they are all numbers then check if any are divisible by 6 and return ‘graham cracker’ for that array index, returns ‘marshmallow’ if it is divisible by 9 and ‘chocolate’ if the array item is divisible by both 6 and 9.  Then convert the array into a string where each element is divided by the exact quote (including the whitespace padding) “ yummy ”.
function smores(val) {
  const allAreNotNumbers = val.every(i => typeof i !== 'number');
  if (allAreNotNumbers) { return 'hungry'; }
  return val.map((item) => {
    if (item % 6 === 0 && item % 9 === 0) {
      return 'chocolate';
    } else if (item % 6 === 0) {
      return 'graham cracker';
    } else if (item % 9 === 0) {
      return 'marshmallow';
    }
  }).join(' yummy ');
}`,
    },

    {
      name: 'Type Checker',
      solution: `// Write a function that checks if the value passed in is an array and returns the string “Ray gun” if it is, if the value passed in is an object returns “Obi-Wan”, if the value passed in is a string returns ‘Polly-o’ if the value passed in is a number returns ’Numbness’, if it’s a boolean returns ‘Wooly bully’, if it’s undefined returns ‘The undertaker’.
function typeChecker(val) {
  let phrase;
  if (val !== undefined){
    switch(val.constructor.name) {
      case 'Array':
        phrase = "Ray gun";
        break;
      case 'Object':
        phrase = "Obi-Wan";
        break;
      case 'String':
        phrase = "Polly-o";
        break;
      case 'Number':
        phrase = "Numbness";
        break;
      case 'Boolean':
        phrase = "Wooly bully";
        break;
    }
  } else { phrase = 'The undertaker'; }
  return phrase;
}`,
    },

    {
      name: 'Cup Cake Candy Cane',
      solution: `// Write a function that checks if the number passed in is NaN, if it is, it generates a random number from 1 to 5, creates an array of that many indexes and sets each index value to the string ‘Cupcake’, if it isn’t NaN, creates an array of that many indexes and sets each index value to the string ‘Candy cane'.
function cupcakeCandyCane(val) {
  let arr = new Array(Math.floor(Math.random() * 5 + 1));
  if (isNaN(val) && typeof val !== 'object' && val !== undefined) {
    arr.fill('Cupcake');
  } else {
    arr.fill('Candy cane');
  }
  return arr;
}`,
    },

    {
      name: 'Milkshake Jelly',
      solution: `//   Write a function that checks an array to be sure it is made up of strings, then checks to see if any values contain the characters ‘Jelly’ and if they do do it should return an array that adds 5 spaces before and after the word.  It should also check if there are any strings with the value ‘Milkshake’ that have any flanking whitespace and remove said white space before and after the string and return the new array.  Otherwise it should just return the original array.
function milkshakeJelly(val) {
  const allAreStrings = val.every(function(value) {
    return typeof value === 'string';
  });
  if (!allAreStrings) { return val; }
  const manipulatedArr = val.map(function(value) {
    if ( value.match(/jelly/gi) ) {
      return "     " + value + "     ";
    } else if ( value.match(/milkshake/gi) ) {
      return value.trim();
    } else {
      return value;
    }
  });
  return manipulatedArr;
}`,
    },

    {
      name: 'The Aviator',
      solution: `// Write a function that takes two arguments that are strings, combines them together into one string, then return a new array that contains values where the first index contains all numbers present, the second index contains all uppercase vowels present, the third index contains all lowercase vowels present, the fourth index contains all uppercase consonants present and the fifth index contains all lowercase consonants present.  In addition, all values should be alphanumerically sorted.
function theAviator(val1, val2) {
  const arr = (val1 + val2).split('');
  const numbers = arr.filter(char => char.match(/[0-9]/));
  const upperCaseV = arr.filter(char => char.match(/[AEIOU]/));
  const lowerCaseV = arr.filter(char => char.match(/[aeiou]/));
  const upperCaseC = arr.filter(char => char.match(/[A-Z]/) && !char.match(/[AEIOU]/));
  const lowerCaseC = arr.filter(char => (char.match(/[a-z]/) && !char.match(/[aeiou]/)) );
  const filteredArr = [ numbers, upperCaseV, lowerCaseV, upperCaseC, lowerCaseC ];
  return filteredArr.map(val => val.sort().join(''));
}`,
    },

    {
      name: 'Stutter',
      solution: `// Write a function that takes a string and for every word with two or more characters copies it’s first two characters and prepends those characters to the beginning of that word and for every word with only one character copies that character and prepends it to that character, return the new string.
function stutter(val) {
  return val.split(' ').map(function(word) {
    if (word.length > 1) { return word[0] + word[1] + word }
    return word[0] + word;
  }).join(' ');
}
`,
    },

    {
      name: 'Taste the Rainbow',
      solution: `// Write a function that takes a string and checks whether it contains ‘red’, ‘orange’, yellow’, ‘green’, ‘blue’, or ‘purple’ and returns an array containing only the remaining colors in the list, in any order if any colors is present.  If none of these colors are present in the string return an array with one string value set to ‘taste the rainbow’.
function tasteTheRainbow(val) {
  let matches = val.match(/red|orange|yellow|green|blue|purple/gi);
  if (matches){
    let colors = ['red','orange','yellow','green','blue','purple'];
    var difference = function (source, toRemove) {
      return source.filter(function(value){
        return toRemove.indexOf(value) == -1;
      });
    };
    let diff = difference(colors, matches);
    return diff;
  } else {
    return ['taste the rainbow'];
  }
}`,
    },

    {
      name: 'Inner Strip',
      solution: `// Write a function that takes opening and closing html tags in a string and returns only the innerHTML, as a string.
function innerStrip(val) {
  const tags = val.match(/<.+?>/g);
  tags.forEach(tag => val = val.replace(tag, ''));
  return val;
}`,
    },

    {
      name: 'Char Sort Reverse',
      solution: `// Write a function that takes each character in a string, returns an array of each characters character code, puts the array back together as a string and sorts that string alphanumerically and then reverses it.
function charSortReverse(val) {
  let chars = val.split('');
  let charCodes = [];
  chars.forEach(function(char){
    charCodes.push(char.charCodeAt(0));
  });
  let codeBind = charCodes.join('');
  codeBind = codeBind.split('');
  codeBind = codeBind.sort();
  codeBind = codeBind.reverse().join('');
  return codeBind;
}`,
    },

    {
      name: 'Number Bouncer',
      solution: `// Write a function that checks if the number coming in is the largest possible number in JavaScript and returns the string ‘pretty big number dude’, and if the number is the smallest possible number in JavaScript returns ‘pretty small number dude’, if it’s positive infinity returns ‘I love infinity’ if it’s negative infinity returns ‘Weird but cool, negative infinity is cool', any other number should return 'not cool bro, I want something better'.
function numberBouncer(val) {
  let str;
  switch(val) {
    case Number.MAX_VALUE:
      str = 'pretty big number dude';
      break;
    case Number.MIN_VALUE:
      str = 'pretty small number dude';
      break;
    case Number.POSITIVE_INFINITY:
      str =  'I love infinity';
      break;
    case Number.NEGATIVE_INFINITY:
      str = 'Weird but cool, negative infinity is cool';
      break;
    default:
      str = 'not cool bro, I want something better';
    }
    return str;
}`,
    },

    {
      name: 'Frankenstring',
      solution: `// Write a function that takes a string and turns each character into it’s character code, then puts the character codes back together as a string, then go through each single digit number and find it’s corresponding character from it’s character code and construct a new string.
function frankenstring(val) {
  let chars = val.split('');
  let codeStore = [];
  chars.forEach(function(char){ codeStore.push(char.charCodeAt(0)); });
  codeStore = codeStore.join('');
  codeStore = codeStore.split('');
  valStore = [];
  codeStore.forEach(function(char){
    valStore.push(String.fromCharCode(char));
  });
  let newVal = valStore.join('');
  return newVal;
}`,
    },

    {
      name: 'Camel Chars',
      solution: `// Write a function that takes a string, splits it in half (if it's odd, round it down) and make the first half lowercase and whatever is left over half uppercase.
function camelChars(val) {
  let half, even, firstHalf, secondHalf;
  even = (val.length % 2 === 0) ? true : false;
  half = (even) ? val.length / 2 : Math.floor( val.length / 2 );
  firstHalf = val.slice(0, half);
  secondHalf = val.slice(half, val.length);
  let newVal = firstHalf.toLowerCase().concat(secondHalf.toUpperCase());
  return newVal;
}`,
    },

    {
      name: 'I Love Vowels',
      solution: `// Write a function that returns any string passed to it, but wherever vowels (a, e, i, o and u) are present replace that vowel with five of those vowels.
function iLoveVowels(val) {
  chars = val.split('');
  iLoveVowelsStore = [];
  chars.forEach(function(char){
    let a,e,i,o,u, isAVowel;
    a = (char === 'a');
    e = (char === 'e');
    i = (char === 'i');
    o = (char === 'o');
    u = (char === 'u');
    isAVowel = ((a) || (e) || (i) || (o) || (u));
    char = (isAVowel) ? char.repeat(5) : char;
    iLoveVowelsStore.push(char);
  });
  let iLoveVowels = iLoveVowelsStore.join('');
  return iLoveVowels;
}`,
    },

    {
      name: 'Catfish',
      solution: `// Write a function that returns the word 'Cat' if a number passed in is divisible by four, 'Fish' if a number passed in is divisible by five and 'CatFish' if a number passed in is divisible by both four and five and the string 'Sushi please' if it's not a number.
function catfish(val) {
  let str, isNumb, divisibleBy4, divisibleBy5, divisibleBy4And5;
  if (typeof val === 'number') {
    divisibleBy4 = (val % 4 === 0);
    divisibleBy5 = (val % 5 === 0);
    divisibleBy4And5 = ( (divisibleBy4) && (divisibleBy5) );
    if (divisibleBy4And5) { str = 'CatFish'; }
    else if (divisibleBy5) { str = 'Fish'; }
    else if (divisibleBy4) { str = 'Cat'; }
  } else {
    str = 'Sushi please';
  }
  return str;
}`,
    },

    {
      name: 'Weird Words',
      solution: `// Write a function that returns whatever string is passed in but where every odd word is uppercase and every even word is lowercase.
function weirdWords(val) {
  return val.split(' ').map((val,i) => {
    if (i % 2 === 0) {
      return val.toUpperCase();
    } else {
      return val.toLowerCase();
    }
  }).join(' ');
}`,
    },

    {
      name: 'Rice Milk',
      solution: `// Write a function that returns the string 'how do you milk a grain of rice?' if the (case insensitive) text 'rice milk' appears anywhere in the string passed in and returns the string 'Almond milk?' if the text 'rice milk' is not present.
function riceMilk(val) {
  let hasRiceMilk = val.includes('rice milk');
  let riceMilk = (hasRiceMilk) ? 'how do you milk a grain of rice?' : 'Almond milk?';
  return riceMilk;
}`,
    },

    {
      name: 'Only Lowercase',
      solution: `// Write a function that takes a string and generates a random number from 1 to 10 and returns an array of that randomly generated numbers length containing nothing but whatever string has been passed in minus any uppercase characters that might be present in the string.
function onlyLowerCase(val) {
  const arr = new Array(Math.ceil(Math.random() * 10));
  const onlyLower = val.split('').filter(char => !char.match(/[A-Z]/g)).join('');
  return arr.fill(onlyLower);
}`,
    },

    {
      name: 'Alice',
      solution: `// Write a function that returns 'Which Alice?' if the array passed in contains 'Alice', 'Coffee' if an array passed in contains the values 'Alice' and 'Dilbert', if none of these are present returns 'Alice is not home can you please leave a message?'.
function alice(val) {
  let valMatch = [];
  val.forEach(function(val){
    if ((val === 'Alice') || (val === 'Dilbert')) {
      valMatch.push(val);
    }
  });
  if ( (valMatch.length === 1) && (valMatch[0] === 'Dilbert') ) {
    valMatch.splice(0, 1);
  }
  let noMatch = (valMatch.length === 0);
  let alice = (valMatch.length === 1);
  let aliceAndDilbert = (valMatch.length === 2);
  let str;
  if (noMatch) {
    str = 'Alice is not home can you please leave a message?';
  } else if (aliceAndDilbert) {
    str = 'Coffee';
  } else if (alice) {
    str = 'Which Alice?';
  }
  return str;
}`,
    },

    {
      name: 'Hip Hop',
      solution: `// Write a function that appends the characters 'hop' to the (case insensitive) characters 'hip' wherever they show up in a string and returns the result.
function hipHop(val) {
  let hipStore = [];
  let vReg = /hip/g;
  while ((match = vReg.exec(val)) !== null) {
    hipStore.push(match.index);
  }
  hipstore = hipStore.reverse();
  let chars = val.split('');
  hipStore.forEach(function(hipI){
    let insertionPoint = hipI + 3;
    chars.splice(insertionPoint, 0, 'hop');
  });
  let newVal = chars.join('');
  return newVal;
}`,
    },

    {
      name: 'Peanut Butter Jelly Time',
      solution: `// Write a function that subtracts all the values of an array (from right to left), returns the absolute value, rounds it up to it's nearest whole number and returns the 'peanut butter jelly time!', repeated that number of times.
function peanutButterJellyTime(val) {
  let total = Math.ceil(Math.abs(val.reduceRight(function(total, num) { return total - num; })));
  let peanutButterJellyTime = 'peanut butter jelly time!'.repeat(total);
  return peanutButterJellyTime;
}`,
    },

    {
      name: 'Outer Strip',
      solution: `// Write a function that takes an html tag in a string and returns only the tag, as a string.
function outerStrip(val) {
  let tagStore = val.match(/<.+?>/gi);
  let newVal = tagStore.join('');
  return newVal;
}`,
    },

    {
      name: 'I Hate Vowels',
      solution: `// Write a function that returns any string passed to it, but wherever 'a' is present, replace it with '@', wherever 'e' is present replace it with '3', wherever 'i' is present, replace it with '1' and wherever 'o' is present replace it with '0' and where 'u' is present, replace it with 'v'.
function iHateVowels(val) {
  chars = val.split('');
  newCharStore = [];
  chars.forEach(function(char){
    let a, e, i, o , u, isVowel;
    a = char === 'a';
    e = char === 'e';
    i = char === 'i';
    o = char === 'o';
    u = char === 'u';
    isVowel = ((a)||(e)||(i)||(o)||(u));
    if      (a) { newCharStore.push('@');  }
    else if (e) { newCharStore.push('3');  }
    else if (i) { newCharStore.push('1');  }
    else if (o) { newCharStore.push('0');  }
    else if (u) { newCharStore.push('v');  }
    else { newCharStore.push(char); }
  });
  let newVal = newCharStore.join('');
  return newVal;
}`,
    },

    {
      name: 'Bubble Bobble',
      solution: `// Write a function that returns the word 'Bubble' if a number passed in is divisible by nine, 'Bobble' if a number passed in is divisible by twelve and 'BubbleBobble' if a number passed in is divisible by both nine and twelve and the string 'Pop the bubble' if it's not a number or is not divisble by 9 or 12.
function bubbleBobble(val) {
  if (typeof val === 'number') {
    let divisibleBy9 = (val % 9 === 0);
    let divisibleBy12 = (val % 12 === 0);
    let divisibleBy9And12 = ((divisibleBy9) && (divisibleBy12));
    if (divisibleBy9And12) {
      return 'BubbleBobble';
    } else if (divisibleBy9) {
      return 'Bubble';
    } else if (divisibleBy12) {
      return 'Bobble';
    } else {
      return 'Pop the bubble'
    }
  } else {
    return 'Pop the bubble'
  }
}`,
    },

    {
      name: 'Ain\'t Nobody Got Time For That',
      solution: `// Write a function that takes string containing an html opening and closing tag with innerHTML and returns the same opening and closing tags with the inner html stripped out and replaced with 'nobody got time for that'.
function aintNobodyGotTimeForThat(val) {
  let tagStore = val.match(/<.+?>/gi);
  tagStore.splice(1,0,'nobody got time for that');
  val = tagStore.join('');
  return val;
}`,
    },

    {
      name: 'String Bouncer',
      solution: `// Write a function that checks whether an incoming string contains html opening and closing tags and if it does, return the string 'great html bro', if it doesn't it should return 'nope, it has no opening and closing tags'.
function stringBouncer(val) {
  let tagStore = val.match(/<.+?>/gi);
  if (tagStore) {
    if (tagStore.length === 2) {
      val = 'great html bro';
    }
  } else {
    val = 'nope, it has no opening and closing tags';
  }
  return val;
}`,
    },

    {
      name: 'X Files',
      solution: `// Write a function that takes an incoming string and checks if it has the text 'alien' and returns the string 'I want to believe' if it is present and 'aliens do not exist' if the text is not present.
function xFiles(val) {
  let newVal = (val.includes('alien')) ? 'I want to believe' : 'aliens do not exist';
  return newVal;
}`,
    },

    {
      name: 'Route 66',
      solution: `// Write a function that returns the word 'Holy' if a number passed in is divisible by six, 'Moly' if a number passed in is divisible by eleven and 'HolyMoly' if a number passed in is divisible by both six and eleven and the string 'What the heck is this?' if it's not a number or is not divisible by 6 or 11.
function route66(val) {
  if (typeof val === 'number') {
    let divisibleBy6 = (val % 6 === 0);
    let divisibleBy11 = (val % 11 === 0);
    let divisibleBy6And11 = ((divisibleBy6)&&(divisibleBy11));
    if (divisibleBy6And11) {
      return 'HolyMoly';
    } else if (divisibleBy6) {
      return 'Holy';
    } else if (divisibleBy11) {
      return 'Moly';
    } else {
      return 'What the heck is this?';
    }
  } else {
    return 'What the heck is this?';
  }
}`,
    },

  ];
}
