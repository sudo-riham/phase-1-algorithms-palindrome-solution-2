function isPalindrome(word) {
  for (let firstIndex = 0; firstIndex < word.length / 2; firstIndex++) {
    const lastEndex = word.length - 1 - firstIndex;

    if (word[firstIndex] !== word[lastEndex]) {
      return false;
    }
  }

  return true;
}


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
