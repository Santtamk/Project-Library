

let library = [
    {title:"Harry Porter",
     author:"J K Rowling",
     pages:"20",
     read:'true'
     },{
     title:"upper",
     author:"upper",
     pages:"20",
     read:'true'
     }
]

function Book (title, author, pages, read ) {
    this.bookTitle = title;
    this.bookAuthor = author;
    this.numberOfPages = pages;
    this.bookRead = read;
}


function read(event, book ) {
    const button = event.target
    if (button.innerText === 'Not Read') {
        button.innerText = 'Read';
        // book.read = true;
    } else if (button.innerText === 'Read') {
        button.innerText = 'Not Read';
        // book.read = false`
    }
}


function addBookToLibrary () {
    const listOfBooks = document.getElementById('book');
    listOfBooks.setAttribute('id','list')

library.forEach((book) => {
        const card = document.createElement('div');
        card.setAttribute('id', 'card');
      

        const title =  document.createElement('h4');
        title.textContent = book.title;
        card.appendChild(title);

        const author = document.createElement('p');
        author.textContent = `Author : ${book.author}`;
        card.appendChild(author);
       
        const pages = document.createElement('p');
        pages.textContent = `Pages read : ${book.pages}`;
        card.appendChild(pages)

        const readIt = document.createElement('button')
        readIt.textContent = 'Read'
        readIt.addEventListener('click', function (event){
            read(event, book)});
        readIt.addEventListener('click', function(event){event.preventDefault()});
        card.appendChild(readIt);

        listOfBooks.appendChild(card);
    });
}

addBookToLibrary();


const newBook = () => {
    const newBookButton = document.querySelector('#newBookButton');

    newBookButton.addEventListener('click', createForm);

}

function createForm() {
    const formBook = document.querySelector('#formBook');

    const titleLabel = document.createElement('label');
    titleLabel.textContent = 'Title of the book'
    formBook.appendChild(titleLabel);

    const titleInput  = document.createElement('input');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('placeholder', 'Enter text here...')
    formBook.appendChild(titleInput);

    const authorLabel = document.createElement('label');
    authorLabel.textContent = 'Author of the book'
    formBook.appendChild(authorLabel);

    const authorInput  = document.createElement('input');
    authorInput.setAttribute('type', 'text');
    authorInput.setAttribute('placeholder', 'Enter text here...')
    formBook.appendChild(authorInput);

    const pagesLabel = document.createElement('label');
    pagesLabel.textContent = 'Pages read'
    formBook.appendChild(pagesLabel);

    const pagesInput  = document.createElement('input');
    pagesInput.setAttribute('type', 'number');
    pagesInput.setAttribute('placeholder', 'No of pages read.')
    formBook.appendChild(pagesInput);

    const haveYouReadIt = document.createElement('button');
    haveYouReadIt.innerText = 'Read' 
    haveYouReadIt.addEventListener('click', function (event){
        read(event)});
    haveYouReadIt.addEventListener('click', function(event){event.preventDefault()});
    formBook.appendChild(haveYouReadIt);

    const submit = document.createElement('input')
    submit.setAttribute('type', 'Submit');
    submit.setAttribute('value', 'Submit');
    submit.addEventListener('click', function(event){event.preventDefault()});
    formBook.appendChild(submit);

}

newBook();
// createForm()