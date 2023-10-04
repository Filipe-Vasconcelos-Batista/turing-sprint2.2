/** Comments
If needed, you can add comments to a program. Comments are used to explain programs. They help us humans to understand programs. Computers ignore comments.

In JavaScript there are two ways to write comments: Line comments are introduced with // and are valid until the end of the line. Block comments start with /* and end with *///
//. Any text in between is a comment.

// That's a line comment.

// This line comment
// covers 2 lines.

/* That's a block comment. */

/* This block comment
covers 2 lines. */

/**
 * This is also a block comment.
 * The additional stars between
 * the beginning and the end of the
 * block comment are only for decoration.
 */
/*
Block comments are often used to explain functions. Line comments explain the code flow.
*/
/**
 * Checks whether a string contains
 * any characters other than spaces.
 *//*
function isBlank(string) {
  // The method trim() removes spaces at
  // the beginning and the end of a string.
  let trimmedString = string.trim();
  return trimmedString.length === 0;
}

Comments can't be checked with the tests used here. It follows a task where you have to apply much of what you have learned so far.
Exercise
Write a function median that takes an array of ascending numbers and returns the median of that numbers.

Example: median([1, 2, 10]) should return 2 and median([1, 2, 10, 100]) should return 6. */
const median= arr=>{
    let l=arr.length
    if (l%2 !== 0){
        l=Math.floor(l/2)
        return(arr[l])}
    else{
        l=Math.floor(l/2)
        let L=l-1;
        return (arr[l]+arr[L])/2
    }
}

console.log(median([1, 2, 10]),median([1, 2]))