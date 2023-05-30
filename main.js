import BookList from './modules/bookList.js';

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
