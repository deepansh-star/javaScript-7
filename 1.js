function dblArray(arr, callback) {
const dblArry = arr.map((num) =>{
 return callback(num) ;
}) ;
return dblArry ;
}
const orgArr = [1, 2, 3, 4] ;
function callback(num) {
    return num * 2 ;
}

const arr = dblArray(orgArr, callback);
console.log(arr) ;







