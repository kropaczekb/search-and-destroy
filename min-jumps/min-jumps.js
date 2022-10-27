'use strict';

// Complete this algo
const minJumps = arr => {
  let currentIndex = 0;
  let distanceToTravel = arr.length - 1;
  let totalJumps = 0;
  let reachedEnd = false;
  while (!reachedEnd) {
    if (distanceToTravel <= arr[currentIndex]) {
      totalJumps++;
      return totalJumps;
    }
    let optionsToJump = [];
    for (let i = 1; i <= arr[currentIndex]; i++){
      optionsToJump.push((i + arr[i]))
    }
      let largestOption = Math.max(...optionsToJump)
      let jumpLength = optionsToJump.indexOf(largestOption);
      jumpLength++;
      currentIndex += jumpLength;
      distanceToTravel -= jumpLength;
      totalJumps++;
    }
  };

module.exports = minJumps
