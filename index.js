const myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

const mainBody = document.querySelector('#main-body');
const formBody = document.querySelector('#form-body');

const container = document.querySelector('#container');
const addButton = document.querySelector('#addButton');
const addButtonDiv = document.querySelector('#addButtonDiv');
const addBookButton = document.querySelector('#add-book');

function addBookToLibrary(book) {
    myLibrary.push(book);
    console.log(book.isRead);
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('card');
    bookDiv.innerHTML = `<div class="grid-items">
        <h4><b>${book.title}</b></h4>
        <p>${book.author}</p>
        <p><i class="fas fa-book"></i> ${book.pages} pages</p>
        <p>${ifReadOrNot(book.isRead)}</p>
    </div>`;

    addButtonDiv.before(bookDiv);
}

addButton.addEventListener('click', event => {
    event.preventDefault();

    formBody.style.display = 'block';
    mainBody.style.opacity = '10%';
    // mainBody.classList.add('hide-div');
    // formBody.classList.remove('hide-div');
});

addBookButton.addEventListener('click', event => {
    event.preventDefault();

    const title = document.querySelector('#title').value;
    const auther = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const isRead = getValueFromRadioButton();

    const bookToAdd = new Book(title, auther, pages, isRead);
    addBookToLibrary(bookToAdd);

    // formBody.classList.add('hide-div');
    // mainBody.classList.remove('hide-div');
    formBody.style.display = 'none';
    mainBody.style.opacity = '100%';

    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#pages').value = '';
});

// const hobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, true);

const bookRead = document.querySelector('#bookReadYes');
const bookNotRead = document.getElementById('bookReadNo');

function getValueFromRadioButton() {
    let isRead;
    if (bookRead.checked) {
        isRead = bookRead.value;
        bookRead.checked = false;
    } else {
        isRead = bookNotRead.value;
        bookNotRead.checked = false;
    }
    return isRead;
}

function ifReadOrNot(isRead) {
    if (isRead === 'true') {
        return 'Read';
    } else {
        return 'Not yet read';
    }
}