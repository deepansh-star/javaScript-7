const books = [{
    title: "Who Are You",
    auther: "George Orwell",
    year: 1949 
},{
    title: "To Kill A Mockingbird" ,
    auther: "Harper Lee" ,
    year: 1960 
},{
    title: "The Great Getsby" ,
    auther: "F. Scoot",
    year: 1925 
},{
    title: "Pride And Prejucide" ,
    auther: "Jane",
    year: 1913
}];

function logTiles(title) {
    title.sort() ;
    console.log(title.join(",")) ;
}

function extractTiles(books, callback) {
const title = books.map ((books)=> books.title) ;
callback(title) ;
}

extractTiles(books, logTiles) ;






