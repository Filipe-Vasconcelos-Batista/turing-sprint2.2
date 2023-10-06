/**Functions call functions
Functions can call other functions:

function gross(net) {
  let vat = 20;
  let tax = net * vat / 100;
  return net + tax;
}

function addWithVat(netX, netY) {
  let grossX = gross(netX);
  let grossY = gross(netY);
  return grossX + grossY;
}

addWithVat takes two net amounts and returns the sum of the gross amounts.
 gross calculates the gross amount from a net amount. 
 Thereby a value added tax of 20% is assumed. Instead
  of calculating the gross amount itself, addWithVat use the function 
  brutto. This has two advantages: The code is easier to read and
   the gross calculation is performed centrally in one place.
Exercise
Write a function sum that takes an array of numbers and returns the
 sum of these numbers. Write a function mean that takes an array 
 of numbers and returns the average of these numbers. The mean
  function should use the sum function. */
  const sum=arr=>{
    let add=0
    for(let i=0;i<arr.length;i++){
        add = add + arr[i]
    }
    return add
  }

  const mean=arr=>{
    return sum(arr)/arr.length
  }
  console.log(mean([2,2,2]))


