'use strict';

// Complete this algo
const binarySearch = (array, target) => {
		const embeddedSearch = (start, end) => {
			const midpoint = (Math.floor((end - start)/2) + start)
			if (array[midpoint] === target) {
				return true
			} else {
				if (end - start < 1) {
					return false
				}

				if (target < array[midpoint]) {
					let newEnd = Math.floor(end-midpoint-1)
					return embeddedSearch(start, newEnd)
				}

				if (array[midpoint] < target) {
					let newStart = Math.floor(midpoint+1)
					return embeddedSearch(newStart, end)
				}
			}
		}
		const endingPoint = array.length -1
		return embeddedSearch(0, endingPoint)
		// const midpoint = Math.floor(array.length/2)
		// if (array[midpoint] === target) {
		// 	return true;
		// } else {
		// 	if (array.length === 1 || array.length === 0) {
		// 		return false;
		// 	}
		// 	if (target < array[midpoint]) {
		// 		// const newArray = array.slice(0, midpoint)
		// 		return binarySearch(array, target)
		// 	}
		// 	if (array[midpoint] < target) {
		// 		// const newArray = array.slice((midpoint+1))
		// 		return binarySearch(array, target)
		// 	}
		// }
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
