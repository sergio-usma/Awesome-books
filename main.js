import BookList from './modules/bookList.js';
import showTime from './modules/showDate.js';

// Get the navigation links and sections
const listLink = document.querySelector('.list');
const addLink = document.querySelector('.add');
const contactLink = document.querySelector('.contactLink');
const booksListSection = document.querySelector('.booksList');
const addBookSection = document.querySelector('.addBook');
const contactSection = document.querySelector('.contact');

function showBooksList(event) {
  event.preventDefault();
  booksListSection.style.display = 'block';
  addBookSection.style.display = 'none';
  contactSection.style.display = 'none';
}

function showAddBook(event) {
  event.preventDefault();
  booksListSection.style.display = 'none';
  addBookSection.style.display = 'block';
  contactSection.style.display = 'none';
}

function showContact(event) {
  event.preventDefault();
  booksListSection.style.display = 'none';
  addBookSection.style.display = 'none';
  contactSection.style.display = 'block';
}

listLink.addEventListener('click', showBooksList);
addLink.addEventListener('click', showAddBook);
contactLink.addEventListener('click', showContact);

const bookList = new BookList();
bookList.renderBookList();

const form = document.getElementById('addBookForm');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const bookNameInput = document.getElementById('bookName');
  const bookAuthorInput = document.getElementById('bookAuthor');
  const bookName = bookNameInput.value;
  const bookAuthor = bookAuthorInput.value;

  if (bookName && bookAuthor) {
    bookList.addBook(bookName, bookAuthor);
    form.reset();
    bookList.renderBookList();
  }
});

const showDate = document.getElementById('showDate');
const updateDate = showTime();

setInterval(() => {
  showDate.innerHTML = updateDate();
}, 1000);
