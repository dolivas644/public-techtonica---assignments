async function showBooks(){
    const URL= "http://localhost:8080/books";
    const response = await fetch(URL);
    console.log(response);
    const responseBooks = await response.json();
    console.log(responseBooks);

    for (let book of responseBooks){
        const card = `<div class="col-4">
            <div class="card">
                <div class="card-body">
                <h5 class="card-title">${book.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${book.isbn}</h6>
                <div>Author: ${book.author}</div> 
                <div>Format: ${book.format}</div>
                <hr>
                </div>
            </div>
        </div>`
        document.getElementById('books').innerHTML = document.getElementById('books').innerHTML + card;
    }
}
showBooks();