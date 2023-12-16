async function getCombData() {
const[data1, data2] = await Promise.all ([
fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) =>{
    console.log(response.json()) ;
}) ,
fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) =>{
    console.log(response) ;
    console.log(response.json()) ;
}) ,
]) ;
const combData = {
    todo: data1,
    post: data2
} ;
return combData ;
}
getCombData().then((data) => console.log(data)) ;






