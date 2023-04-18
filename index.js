function isPalindrome(word) {
  // Write your algorithm here
  
    // Convert the string to lowercase and remove non-alphanumeric characters
    word = word.toLowerCase().replace(/[^a-z0-9]/g, '');
  
    // Check if the string reads the same forwards and backwards
    return word === word.split('').reverse().join('');
  
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  The function takes a string as an argument, converts it to lowercase, removes non-alphanumeric characters using a regular expression, and then checks if the resulting string is readable both frontwards and backwards.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
