<<<<<<< HEAD
async function showBooks(){
    const URL= "http://localhost:8080/books";
    const response = await fetch(URL);
    console.log(response);
    const responseBooks = await response.json();
    console.log(responseBooks);
}
showBooks();
||||||| 7bfdb853
=======

// const setEditModal = (isbn) => {
//     // Get information about the book using isbn
//     const xhttp = new XMLHttpRequest();

//     xhttp.open("GET", `http://localhost:8080/book/${isbn}`, false);
//     xhttp.send();

//     const book = JSON.parse(xhttp.responseText);

//     const {
//         title,
//         author,
//         isbn,
//         format
//     } = book;

//     // Filling information about the book in the form inside the modal
//     document.getElementById('isbn').value = isbn;
//     document.getElementById('title').value = title;
//     document.getElementById('author').value = author;
//     document.getElementById('isbn').value = isbn;
//     document.getElementById('format').value = format;
  

//     // Setting up the action url for the book
//     document.getElementById('editForm').action = `http://localhost:8080/book/${isbn}`;
// }

// const deleteBook = (isbn) => {
//      //const element = document.querySelector('#editForm')
//     fetch(`http://localhost:8080/api/books/${isbn}`, { method: 'DELETE' })
//     // .then(() => element.innerHTML='');

//     // Reloading the page
//     .then(location.reload());
// }

async function showBooks(){
    const URL= "http://localhost:8080/api/books";

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

                <button type="button" class="btn btn-danger" onClick="deleteBook(${book.isbn})">Delete</button>
                <button types="button" class="btn btn-primary" data-toggle="modal"
                    data-target="#editBookModal" onClick="setEditModal(${book.isbn})">
                    Edit
                </button>

                </div>
            </div>
        </div>`
        document.getElementById('books').innerHTML = document.getElementById('books').innerHTML + card;
    }
}
showBooks();

const deleteBook = (isbn) => {
    //const element = document.querySelector('#editForm')
   fetch(`http://localhost:8080/api/books/${isbn}`, { method: 'DELETE' })
   // .then(() => element.innerHTML='');

   // Reloading the page
   .then(location.reload());
}

// const deleteBook = (isbn) => {
//     const xhttp = new XMLHttpRequest();

//     xhttp.open("DELETE", `http://localhost:8080/api/books/${isbn}`, false);
//     xhttp.send();

//     // Reloading the page
//     location.reload();
// }
>>>>>>> bfe4f31ea68119257835218e2e99627b185e74ec
