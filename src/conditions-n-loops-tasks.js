/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  const arrayOfNums = [a, b, c];
  let max = 0;

  for (let i = 0; i < arrayOfNums.length; i += 1) {
    if (max < arrayOfNums[i]) {
      max = arrayOfNums[i];
    }
  }
  return max;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  const qX = queen.x;
  const qY = queen.y;
  const kX = king.x;
  const kY = king.y;

  let willQueenWin = false;

  if (qX === kX || qY === kY || Math.abs(qX - kX) === Math.abs(qY - kY)) {
    willQueenWin = true;
  }

  return willQueenWin;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  let isIsosceles = false;
  if (a === 0 || b === 0 || c === 0) return isIsosceles;

  if (a === b && a + b > c) {
    isIsosceles = true;
  } else if (b === c && c + b > b) {
    isIsosceles = true;
  } else if (a === c && a + c > b) {
    isIsosceles = true;
  }
  return isIsosceles;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const romanNums = ['X', 'IX', 'V', 'IV', 'I'];
  const nums = [10, 9, 5, 4, 1];
  let answer = '';
  let number = num;

  for (let i = 0; i < nums.length; i += 1) {
    let a = 0;
    while (a < Math.floor(number / nums[i])) {
      answer += romanNums[i];
      a += 1;
    }
    number %= nums[i];
  }

  return answer;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  const words = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    '.': 'point',
    ',': 'point',
    '-': 'minus',
  };
  let answer = '';

  for (let i = 0; i < numberStr.length; i += 1) {
    switch (answer === '') {
      case true:
        answer += words[numberStr[i]];
        break;
      case false:
        answer += ` ${words[numberStr[i]]}`;
        break;
      default:
        answer = '';
    }
  }

  return answer;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let isStrPalindrome = true;
  const { length } = str;

  for (let i = 0; i < length; i += 1) {
    if (str[i] !== str[length - 1 - i]) {
      isStrPalindrome = false;
    }
  }
  return isStrPalindrome;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let index = -1;
  for (let i = 0; i < str.length; i += 1) {
    if (letter === str[i]) {
      index = i;
    }
  }
  return index;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let doesContain = false;
  let modifiedNum = num;
  let doRun = true;

  while (doRun) {
    const lastRun = modifiedNum < 10;

    if (modifiedNum % 10 === digit) {
      doesContain = true;
      doRun = false;
    } else {
      modifiedNum = (modifiedNum - (modifiedNum % 10)) / 10;
    }

    if (lastRun) {
      doRun = false;
    }
  }
  return doesContain;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  const { length } = arr;

  for (let i = 1; i < length; i += 1) {
    let leftSum = 0;
    for (let j = i - 1; j >= 0; j -= 1) {
      leftSum += arr[j];
    }

    let rightSum = 0;
    for (let k = i + 1; k < length; k += 1) {
      rightSum += arr[k];
    }

    if (leftSum === rightSum) {
      return i;
    }
  }

  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const array = [];

  for (let i = 0; i < size; i += 1) {
    array[i] = [];
  }

  let startingRowIndex = 0;
  let startingColumnIndex = 0;
  let finishingRowIndex = size;
  let finishingColumnIndex = size;
  let value = 0;

  while (
    startingRowIndex < finishingRowIndex &&
    startingColumnIndex < finishingColumnIndex
  ) {
    for (let i = startingColumnIndex; i < finishingColumnIndex; i += 1) {
      value += 1;
      array[startingRowIndex][i] = value;
    }
    startingRowIndex += 1;

    for (let i = startingRowIndex; i < finishingRowIndex; i += 1) {
      value += 1;
      array[i][finishingColumnIndex - 1] = value;
    }
    finishingColumnIndex -= 1;

    if (startingRowIndex < finishingRowIndex) {
      for (let i = finishingColumnIndex - 1; i >= startingColumnIndex; i -= 1) {
        value += 1;
        array[finishingRowIndex - 1][i] = value;
      }
      finishingRowIndex -= 1;
    }

    if (startingColumnIndex < finishingColumnIndex) {
      for (let i = finishingRowIndex - 1; i >= startingRowIndex; i -= 1) {
        value += 1;
        array[i][startingColumnIndex] = value;
      }
      startingColumnIndex += 1;
    }
  }
  return array;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const answer = matrix;
  const { length } = answer;

  for (let i = 0; i < parseInt(length / 2, 10); i += 1) {
    for (let j = i; j < length - i - 1; j += 1) {
      const el = answer[i][j];
      answer[i][j] = answer[length - 1 - j][i];
      answer[length - 1 - j][i] = answer[length - 1 - i][length - 1 - j];
      answer[length - 1 - i][length - 1 - j] = answer[j][length - 1 - i];
      answer[j][length - 1 - i] = el;
    }
  }

  return matrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const answer = arr;
  const { length } = arr;

  for (let i = 1; i < length; i += 1) {
    const current = answer[i];

    let j = i;

    while (j > 0 && answer[j - 1] > current) {
      answer[j] = answer[j - 1];
      j -= 1;
    }

    answer[j] = current;
  }
  return answer;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let answer = str;
  let start = '';
  let end = '';
  let count = iterations;
  const { length } = str;

  while (count > 0) {
    for (let i = 0; i < length; i += 1) {
      if (i % 2 === 0) {
        start += answer[i];
      } else {
        end += answer[i];
      }
    }
    count -= 1;

    if (str === `${start}${end}`) {
      count = iterations % (iterations - count);
      start = '';
      end = '';
      answer = str;
    } else {
      answer = `${start}${end}`;
      start = '';
      end = '';
    }
  }

  return answer;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  let num = number;
  const numberArr = [];
  let doRun = true;

  while (doRun) {
    const currentNum = num % 10;
    if (currentNum < numberArr[0]) {
      const rangeNums = numberArr.filter(
        (numVal) => numVal > currentNum && numVal < numberArr[0]
      );
      const minNum = rangeNums.length ? Math.min(...rangeNums) : numberArr[0];
      num = 10 ** numberArr.length * (num - currentNum + minNum);

      const indexOfMin = numberArr.findIndex((el) => el === minNum);
      numberArr.splice(indexOfMin, 1);
      numberArr.push(currentNum);

      const arrSorted = numberArr.sort((a, b) => a - b);

      while (arrSorted.length) {
        num += arrSorted.shift() * 10 ** arrSorted.length;
      }

      doRun = false;
      break;
    }

    numberArr.unshift(currentNum);
    num = (num - currentNum) / 10;
    if (num === 0) {
      doRun = false;
    }
  }

  return num;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
