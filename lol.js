
function dice(str){
    let x=parseInt(str);
    let index=str.indexOf("+") + 1;
    let y=str.substr(index);
    y=parseInt(y)
    console.log( x + y)
}
dice("117+19")