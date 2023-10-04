/**Array: join()
With join you join all elements of an array into a string:

let words = ['Sex', 'Drugs', 'Rock', 'Roll'];
let s1 = words.join();
let s2 = words.join(' & ');
let s3 = words.join(' and ');

Without an argument join joins the elements separated by commas. s1 has the value 'Sex,Drugs,Rock,Roll'. Otherwise, the passed argument specifies the separator. s2 has the value 'Sex & Drugs & 
Rock & Roll' and s3 has the value 'Sex and Drugs and Rock and Roll'.
Exercise
Write a function list that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'.
An empty array should return an empty string.

Example: list(['Huey', 'Dewey', 'Louie']) should return 'Huey, Dewey and Louie'. */
const list=arr=>{
    if (arr.length=== 0){
        return ""
    }else if(arr.length=== 1){
        return arr[0]
    }
    else{
        let firstHalf=arr.slice(0,arr.length -1);
        firstHalf=firstHalf.join(", ")
        let lastElement=arr[arr.length-1]
        return firstHalf + " and "+ lastElement
    }
}
console.log(list(['Huey', 'Dewey', 'Louie']),list([]),list(['Huey']))