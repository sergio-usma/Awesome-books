import Book from './bookClass.js';

class BookList {
  constructor() {
    this.bookList = localStorage.getItem('bookList')
      ? JSON.parse(localStorage.getItem('bookList'))
      : [];
  }

  toLocalStorage() {
    localStorage.setItem('bookList', JSON.stringify(this.bookList));
  }

  addBook(title, author) {
    const newBook = new Book(this.bookList.length + 1, title, author);
    this.bookList.push(newBook);
    this.toLocalStorage();
  }

  removeBook(id) {
    this.bookList = this.bookList.filter((book) => book.id !== id);
    this.toLocalStorage();
  }

  renderBookList() {
    const bookListElement = document.getElementsByClassName('booksList__container')[0];
    bookListElement.innerHTML = '';

    const bookListTable = document.createElement('table');
    bookListTable.classList.add('bookList__table');

    this.bookList.forEach((book, index) => {
      const row = document.createElement('tr');

      if (index % 2 === 0) {
        row.classList.add('even-row');
      } else {
        row.classList.add('odd-row');
      }

      const bookCell = document.createElement('td');
      bookCell.innerText = `"${book.title}" by ${book.author}`;
      row.appendChild(bookCell);

      const deleteCell = document.createElement('td');
      const deleteButton = document.createElement('button');
      deleteButton.classList.add('bookList__book__delete');
      deleteButton.innerText = 'Remove';

      deleteButton.addEventListener('click', () => {
        this.removeBook(book.id);
        this.renderBookList();
      });

      deleteCell.appendChild(deleteButton);
      row.appendChild(deleteCell);

      bookListTable.appendChild(row);
    });

    bookListElement.appendChild(bookListTable);
  }
}

export default BookList;