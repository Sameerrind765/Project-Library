const listContainer = document.getElementById("list-container");

function addBook() {
  event.preventDefault(); // Prevent default form submission

  let bookName = document.getElementById("bookName").value;
  let bookAuthor = document.getElementById("bookAuthor").value;
  let bookPages = document.getElementById("bookPages").value;

  // Validate input (optional)
  if (!bookName || !bookAuthor || !bookPages) {
    alert("Please fill in all book details.");
  }

  const book = { bookName, bookAuthor, bookPages };
  list(book);
}

document.getElementById("book-details").addEventListener("submit", addBook);

function list(book) {
  const bookList = document.createElement("div");
  bookList.classList.add("book-item");
  bookList.innerHTML = `
    <div class="booklist">BOOK NAME; ${book.bookName}
    <br>AUTHOR NAME; ${book.bookAuthor}
    <br>NO. OF PAGES; ${book.bookPages} pages</div>
  `;

  listContainer.appendChild(bookList);
}
