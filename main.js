let bookList = localStorage.getItem('bookList')
  ? JSON.parse(localStorage.getItem('bookList'))
  : [
    {
      id: 1,
      title: 'The Lord of the Rings',
      author: 'J.R.R. Tolkien',
    },
    {
      id: 2,
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
    },
    {
      id: 3,
      title: "Harry Potter and the Philosopher's Stone",
      author: 'J.K. Rowling',
    },
    {
      id: 4,
      title: 'Harry Potter and the Chamber of Secrets',
      author: 'J.K. Rowling',
    },
  ];

function toLocalStorage() {
  localStorage.setItem('bookList', JSON.stringify(bookList));
}

function addBook(title, author) {
  const newBook = {
    id: bookList.length + 1,
    title,
    author,
  };
  bookList.push(newBook);
  toLocalStorage();
}
function removeBook(id) {
  bookList = bookList.filter((book) => book.id !== id);
  toLocalStorage();
}

const bookListElement = document.getElementsByClassName('booksList')[0];

function renderBookList() {
  bookListElement.innerHTML = '';
  bookList.forEach((book) => {
    const bookElement = document.createElement('article');
    bookElement.classList.add('bookList__book');
    bookElement.innerHTML = `
        <p class="bookList__book__name">${book.title}</p>
        <p class="bookList__book__author">${book.author}</p>`;
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('bookList__book__delete');
    deleteButton.innerText = 'Remove';

    deleteButton.addEventListener('click', () => {
      removeBook(book.id);
      renderBookList();
    });

    bookElement.appendChild(deleteButton);
    bookListElement.appendChild(bookElement);
  });
}

renderBookList();

const form = document.getElementById('addBookForm');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const bookNameInput = document.getElementById('bookName');
  const bookAuthorInput = document.getElementById('bookAuthor');
  const bookName = bookNameInput.value;
  const bookAuthor = bookAuthorInput.value;

  if (bookName && bookAuthor) {
    addBook(bookName, bookAuthor);
    form.reset();
    renderBookList();
  }
});
