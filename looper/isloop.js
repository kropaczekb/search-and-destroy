"use strict";

//Complete this algo
const isLoop = (linkedlist) => {
  const nodesContained = [];
  let currentNode = linkedlist.head;
  while (currentNode.next) {
    if (nodesContained.includes(currentNode)) {
      return true;
    }
    nodesContained.push(currentNode);
    currentNode = currentNode.next;
    // console.log(nodesContained);
  }
  return false;
};

const findLoop = (linkedlist) => {
  const nodesContained = [];
  let currentNode = linkedlist.head;
  while (currentNode.next) {
    if (nodesContained.includes(currentNode)) {
      return currentNode;
    }
    nodesContained.push(currentNode);
    currentNode = currentNode.next;
    // console.log(nodesContained);
  }
  return false;
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = { isLoop, findLoop };
