async function showBooks(){
    const URL= "http://localhost:8080/books";
    const response = await fetch(URL);
    console.log(response);
    const responseBooks = await response.json();
    console.log(responseBooks);
}
showBooks();