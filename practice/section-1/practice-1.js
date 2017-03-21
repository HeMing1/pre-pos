'use strict';

function collectSameElements(collectionA, collectionB) {
	var arrResult = [];
	for (var itemA in collectionA) {
		for (var itemB in collectionB) {
			if (collectionA[itemA] === collectionB[itemB]) {
				arrResult.push(collectionA[itemA]);
			}
		}
	}
	return arrResult;
}
