// a cleaner refactored solution
// declare a function converToRoman which takes in an input number num
function convertToRoman(num) {
  // declare an array of integers for each value with a unique roman numeral character, plus the cases of 900, 400, 90. 40, 9, and 4 where the characters are backwards
  const integers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  // store the corresponding roman numerals for the values in the integers array in another array strings
  const strings = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  // declare a variable converted to be an empty string
  let converted = '';
  // looping through the integers array
  for (let i = 0; i < integers.length; i++) {
    // while the number is greater than or equal to the corresponding element of integers at index i
    while (num >= integers[i]) {
      // subtract that element from num
      num -= integers[i];
      // concatenate the corresponding element of strings at index i to converted
      converted += strings[i];
    }
  }
  // return converted
  return converted
}

convertToRoman(2014);
console.log(convertToRoman(2014))

// my initial (monstrous) solution
// declare a function convertToRoman which takes in an input number num
function convertToRoman2(num) {
  // declare an object dictionary which stores key values pairs for the basic combinations of roman numerals found at: https://www.mathsisfun.com/roman-numerals.html
  const dictionary = {
    1 : 'I', 2 : 'II', 3 : 'III', 4 : 'IV', 5 : 'V', 6 : 'VI', 7 : 'VII', 8 : 'VIII', 9 : 'IX',
    10: 'X', 20: 'XX', 30 : 'XXX', 40 : 'XL', 50 : 'L', 60 : 'LX', 70 : 'LXX', 80 : 'LXXX', 90 : 'XC',
    100: 'C', 200 : 'CC', 300 : 'CCC', 400 : 'CD', 500 : 'D', 600 : 'DC', 700 : 'DCC', 800 : 'DCCC', 900 : 'CM',
    1000 : 'M', 2000 : 'MM', 3000 : 'MMM', 4000 : 'MMMM'
  }
  // declare a variable converted to be an empty string
  let converted = '';
  // if the dictionary has the property of the number
  if (dictionary.hasOwnProperty(num)) {
    // return converted concatenated with the corresponding value
    return converted += dictionary[num];
  }
  // if the number is 2 digits
  if (num.toString().length == 2) {
    // concatenate converted with dictionary[tens]
    converted += (dictionary[Math.floor(num / 10) * 10])
    // concatenate converted with dictionary[ones]
    converted += (dictionary[num % 10])
    // return converted
    return converted
  }
  // if the number is 3 digits long
  if (num.toString().length == 3) {
    // declare a variable hundreds with the hundreds of num
    let hundreds = Math.floor(num / 100) * 100;
    // concatenate converted with dictionary[hundreds]
    converted += (dictionary[hundreds]);
    // declare a variable tens with the tens of num
    let tens = Math.floor((num - hundreds) / 10) * 10;
    // if tens is not equal to 0
    if (tens !== 0) {
      // concatenate converted with dictionary[tens]
      converted += (dictionary[tens]);
      }
    // declare a variable ones with the ones of num
    let ones = num - hundreds - tens;
    // if ones is not equal to 0
    if (ones !== 0) {
      // concatenate converted with dictionary[ones]
      converted += (dictionary[ones]);
    }
    // return converted
    return converted;
  }
  // you should get the logic at this point and see why it is inefficient compared to the refactored solution
 if (num.toString().length == 4) {
   let thousands = Math.floor(num / 1000) * 1000;
   console.log(thousands)
   converted += (dictionary[thousands])
   console.log(converted)
   let hundreds = Math.floor((num - thousands) / 100) * 100;
   if (hundreds !== 0) {
     converted += (dictionary[hundreds]);
   }
   let tens = Math.floor((num - thousands - hundreds) / 10) * 10;
   if (tens !== 0) {
     converted += (dictionary[tens]);
   }
   let ones = num - thousands - hundreds - tens;
   if (ones !== 0 ) {
     converted += (dictionary[ones]);
   }
   return converted;
 }
}
