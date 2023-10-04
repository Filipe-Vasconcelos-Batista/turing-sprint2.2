/**Array: shift() and push()
Like strings, arrays have several methods. Two of these methods are shift and push. To remind you: Methods are functions that are applied to an object, here an array.
 Methods are appended with a point to the object.

The array method shift removes the first element from an array and returns that element. The length of the array is reduced by 1.

let languages = ['C', 'Java', 'JavaScript'];
let firstLanguage = languages.shift();

The array languages is created with 3 programming languages. After shift the array languages contains only 2 items, viz. ['Java', 'JavaScript']. The value 'C' is stored in firstLanguage.

The method push adds a new element to an array. The new element is passed as a parameter and is added to the end of the array.

let languages = [];
languages.push('C');
languages.push('Java');
languages.push('JavaScript');

Here an empty array is filled successively with the passed values. Finally we get the array ['C', 'Java', 'JavaScript'].
Exercise
Write a function rotate that rotates the elements of an array. All elements should be moved one position to the left.
 The 0th element should be placed at the end of the array. The rotated array should be returned.

Example: rotate(['a', 'b', 'c']) should return ['b', 'c', 'a']. */
const rotate= arr =>{
    let arr2=arr.shift();
    arr.push(arr2)
    return arr
}
console.log(rotate(['a', 'b', 'c']))