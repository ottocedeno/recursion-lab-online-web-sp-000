function printString(string) {
  console.log(string[0]);
  if (string.length > 1) {
    printString(string.substring(1));
  } else {
    return true;
  }
}

function reverseString(string) {
  if (string.length > 1) {
    return (
      string[string.length - 1] +
      reverseString(string.substring(0, string.length - 1))
    );
  } else {
    return string;
  }
}

// FI Solution
// function reverseString(myString) {
//   if (myString.length < 2) {
//     return myString;
//   } else {
//     return reverseString(myString.substring(1)) + myString[0];
//   }
// }

function isPalindrome(string) {
  if (string[0] === string[string.length - 1]) {
    if (string.length > 1) {
      isPalindrome(string.substring(1, string.length - 1));
    }
  } else {
    return false;
  }
  return true;
}

//FI Solution
// function isPalindrome(myString) {
//   let l = myString.length;

//   if (l < 2) {
//     return true;
//   } else if (myString[l - 1] === myString[0]) {
//     return isPalindrome(myString.substring(1, l - 1));
//   } else {
//     return false;
//   }
// }

function addUpTo(array, index) {
  if (index > 0) {
    return array[index] + addUpTo(array, index - 1);
  } else {
    return array[0];
  }
}

//FI Solution
// function addUpTo(myArray, index) {
//   return index ? myArray[index] + addUpTo(myArray, --index) : myArray[index];
// }

function maxOf(array) {
  if (array.length > 1) {
    if (array[0] > array[1]) {
      array.splice(1, 1);
    } else {
      array.shift();
    }
    return maxOf(array);
  } else {
    return array[0];
  }
}

//FI Solution
// function maxOf(myArray) {
//   if (myArray.length === 1) {
//     return myArray[0];
//   } else {
//     return Math.max(myArray.pop(), maxOf(myArray));
//   }
// }

function includesNumber(array, num) {
  if (array.length > 1) {
    if (array[0] === num) {
      return true;
    } else {
      array.shift();
      return includesNumber(array, num);
    }
  } else {
    return array[0] === num;
  }
}

//FI Solution
// function includesNumber(myArray, myNumber) {
//   if (!myArray.length) {
//     return false;
//   } else if (myArray[0] === myNumber) {
//     return true;
//   } else {
//     return includesNumber(myArray.slice(1), myNumber);
//   }
// }
