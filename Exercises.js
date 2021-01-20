//Question 1
  function myReverse(str) {
    // your code here
    let revStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        revStr += str[i];
    }

    return revStr;

  }

//Question 2
function allCombinations(str) {
  let combinations = [];
  // your code here
  
  combinations = new Array();
    for(i=0;i<str.length;i++) {
        for(j=i+1;j<str.length+1;j++) {
          combinations.push(str.slice(i, j));
        }
    }

 
  //
  return combinations;
}

//Question 3
function allCaps(str) {
  // your code here
  return "";
}

//Question 4
function myPower(x, n) {
  // your code here
  return "";
}

//Question 5
function getFirstNotRepeating(str) {
  // your code here
  return "";
}

//Question 6 (Bonus)
function isPrefectNumber(num) {
  // your code here
  return "I'm not interested in the bonus question :(";
}

// *** Playground ***
// Feel free to run and test your code here on your own
console.log(myReverse("sunshine"));
// *** End of Playground ***

// Don't touch me :)
exports.myReverse = myReverse;
exports.allCombinations = allCombinations;
exports.allCaps = allCaps;
exports.myPower = myPower;
exports.getFirstNotRepeating = getFirstNotRepeating;
exports.isPrefectNumber = isPrefectNumber;
