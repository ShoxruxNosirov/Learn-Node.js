let arr = [];
for(let i = 0; i < 500_000; i++) {
    arr.push(Math.floor(Math.random()*1000))
}


console.log("boshlandi");
timee(2);
//timee(1);
timee(3);

function timee(holat) {
    if(holat == 1) {
        let arrr = [...arr]
        let start = Date.now();
        quickSort(arrr);

        let time = Date.now() - start;
        console.log("quickSort time: ", time);
    } 
    if(holat == 2) {
        let arrr = [...arr]
        let start = Date.now();
        shellSort(arrr);

        let time = Date.now() - start;
        console.log("shellSort time: ", time);
    } 
    if(holat == 3) {
        let arrr = [...arr]
        let start = Date.now();
        arrr.sort((a, b) => a - b);

        let time = Date.now() - start;
        console.log("sort time: ", time);
    }
}


function quickSort(arr) {
    if(arr.length == 1) {
        return arr;
    }
    if(arr.length == 0) {
        return [];
    }
    let lastt = arr.pop()
    let [arr1, arr2] = filter(arr, lastt);
    //console.log('arr1 -> ', arr1, ' last -> ', lastt, ' arr2 -> ', arr2);
    return [...quickSort(arr1), lastt, ...quickSort(arr2)];
}

function filter(arr, last) {
    let arr1 = [], arr2 = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < last) {
            arr1.push(arr[i]);
        } else {
            arr2.push(arr[i]);
        }
    }
    return [arr1, arr2];
}

function shellSort(arr, size = arr.length){
	for (let i = Math.floor(size/2); i > 0; i = Math.floor(i/2)){
		for(let j = i; j < size; j++){
			let temp = arr[j];
			let k;
			for(k = j; k >= i && arr[k - i] > temp; k -= i){
				arr[k] = arr[k - i];
			}
			arr[k] = temp;
		}
	}
    return arr;
}