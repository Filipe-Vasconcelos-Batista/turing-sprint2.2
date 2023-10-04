/** Array: concat()
Using the concat method you can concatenate two arrays:

let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
let a3 = a1.concat(a2);

a3 contains the array [1, 2, 3, 4, 5, 6]. The two existing arrays a1 and a2 will not be changed.
Exercise
Write a function concatUp that concatenate two arrays. The longer array should be appended to the shorter array. If both arrays are equally long,
the second array should be appended to the first array.

Example: concatUp([1, 2], [3]) should return [3, 1, 2] and concatUp([5, 7], [6, 8]) should return [5, 7, 6, 8]. */
const concatUp= (arr1,arr2)=>{
    if (arr1.length <= arr2.length){
        return arr1.concat(arr2);
    }
    else{
        return arr2.concat(arr1);
    }
}
console.log(concatUp([1, 2], [3]),concatUp([5, 7], [6, 8]),concatUp([5], [6, 8]))