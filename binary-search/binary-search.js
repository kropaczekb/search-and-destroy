'use strict';

// Complete this algo
const binarySearch = (array, target) => {
		const midpoint = Math.floor(array.length/2)
		if (array[midpoint] === target) {
			return true;
		} else {
			if (array.length === 1 || array.length === 0) {
				return false;
			}
			if (target < array[midpoint]) {
				const newArray = array.slice(0, midpoint)
				return binarySearch(newArray, target)
			}
			if (array[midpoint] < target) {
				const newArray = array.slice((midpoint+1))
				return binarySearch(newArray, target)
			}
		}
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
