/**Array of arrays
So far we have stored numbers, strings and boolean values in arrays. But you can also store arrays in arrays:

let teams = [
  ['Ruby', 'Angel'],
  ['Mia', 'Yui', 'Merve', 'Elif'],
  ['Saanvi', 'Giulia', 'Zeynep']
];

let row1 = [4, 9, 2];
let row2 = [3, 5, 7];
let row3 = [8, 1, 6];
let loshu = [row1, row2, row3];

In the first example, 3 teams are stored in an array. Each team itself is an array of names. The individual teams have different sizes. With

let team = teams[0];

you can access a team and with

let member = teams[0][0];

you can access an individual team member.

Arrays that contain arrays are also called two-dimensional arrays. Carrying this on, you get three- or multidimensional arrays.

In the second example, the Lo Shu Square is stored in a two-dimensional array.
Exercise
Write a function flat that flattens a two-dimensional array with 3 entries.

Example: flat(loshu) should return [4, 9, 2, 3, 5, 7, 8, 1, 6]. Thereby loshu is the magic square from the example above. */
let row1 = [4, 9, 2];
let row2 = [3, 5, 7];
let row3 = [8, 1, 6];
let loshu = [row1, row2, row3];

const flat= arr => arr.concat.apply([],arr)

console.log(flat(loshu))