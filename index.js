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
let removeButtons = document.querySelectorAll('.removeButton');

function addBookToLibrary(book) {
    myLibrary.push(book);
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('card');

    bookDiv.innerHTML = `<button class="removeButton"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="window-close" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-window-close fa-w-16 fa-3x"><path fill="currentColor" d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-83.6 290.5c4.8 4.8 4.8 12.6 0 17.4l-40.5 40.5c-4.8 4.8-12.6 4.8-17.4 0L256 313.3l-66.5 67.1c-4.8 4.8-12.6 4.8-17.4 0l-40.5-40.5c-4.8-4.8-4.8-12.6 0-17.4l67.1-66.5-67.1-66.5c-4.8-4.8-4.8-12.6 0-17.4l40.5-40.5c4.8-4.8 12.6-4.8 17.4 0l66.5 67.1 66.5-67.1c4.8-4.8 12.6-4.8 17.4 0l40.5 40.5c4.8 4.8 4.8 12.6 0 17.4L313.3 256l67.1 66.5z" class=""></path></svg></button>
    <div class="grid-items">
        <h4><b>${book.title}</b></h4>
        <p>${book.author}</p>
        <p><i class="fas fa-book"></i> ${book.pages} pages</p>
        <p>${ifReadOrNot(book.isRead)}</p>
    </div>`;

    addButtonDiv.before(bookDiv);

    removeBook();
}

addButton.addEventListener('click', event => {
    event.preventDefault();

    formBody.style.display = 'block';
    mainBody.style.opacity = '10%';
});

addBookButton.addEventListener('click', event => {
    event.preventDefault();

    const title = document.querySelector('#title').value;
    const auther = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const isRead = getValueFromRadioButton();

    const bookToAdd = new Book(title, auther, pages, isRead);
    addBookToLibrary(bookToAdd);

    formBody.style.display = 'none';
    mainBody.style.opacity = '100%';

    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#pages').value = '';
});

function removeBook() {
    removeButtons = document.querySelectorAll('.removeButton');
    removeButtons.forEach(removeButton => {
        removeButton.addEventListener('click', event => {
            event.preventDefault();
            removeButton.parentElement.remove();
        });
    });
}

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