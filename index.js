import BookList from './modules/bookList.js';
import { DateTime } from './modules/luxon.js';

const listLink = document.querySelector('.list');
const addLink = document.querySelector('.add');
const contactLink = document.querySelector('.contactLink');
const booksListSection = document.querySelector('.booksList');
const addBookSection = document.querySelector('.addBook');
const contactSection = document.querySelector('.contact');

const showBooksList = (event) => {
  event.preventDefault();
  booksListSection.style.display = 'block';
  addBookSection.style.display = 'none';
  contactSection.style.display = 'none';
};

const showAddBook = (event) => {
  event.preventDefault();
  booksListSection.style.display = 'none';
  addBookSection.style.display = 'block';
  contactSection.style.display = 'none';
};

const showContact = (event) => {
  event.preventDefault();
  booksListSection.style.display = 'none';
  addBookSection.style.display = 'none';
  contactSection.style.display = 'block';
};

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

const showTime = () => {
  const dateSelector = document.getElementById('showDate');
  dateSelector.textContent = DateTime.now().toFormat('LLLL d yyyy, hh:mm:ss a');
};

setInterval(showTime, 1000);
