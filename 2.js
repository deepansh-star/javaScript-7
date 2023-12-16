function manipulateString(inpString, callback){
const manipulatedString = inpString.toUpperCase() ;

callback(manipulatedString) ;
}
function longString(manipulatedString) {
console.log(`The Multiplated String Is ${manipulatedString}`) ;
}
manipulateString("Infinity..!", longString) ;
