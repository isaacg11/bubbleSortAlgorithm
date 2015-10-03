
var ar = [1,3,2,9,12,4,5,2];

function bubbleSort(ar) {
	var i, j, lim;
	lim = ar.length; while(lim--) {
		for(i = 0, j = 1; i < lim; ++i, ++j)
			if(ar[i] > ar[j]) { temp = ar[i]; ar[i]=ar[j]; ar[j]= temp;}
	}
	return ar;
}
console.log(bubbleSort(ar));

//1st loop doesn't change anything [1,3,2];
//2nd loop swaps 3 with 2 [1,2,3]
//3rd loop has to run because the 'while' statement is true
//but does not change anything.