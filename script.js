class MakeBook {
  constructor(Name, Author, Pages) {
    this.Name = Name;
    this.Author = Author;
    this.Pages = Pages;
  }
}

function addBook(event) {
  event.preventDefault(); // Prevent default form submission
  let bookName = document.getElementById("bookName").value;
  let bookAuthor = document.getElementById("bookAuthor").value;
  let bookPages = document.getElementById("bookPages").value;
  
  if (!bookName || !bookAuthor || !bookPages) {
    alert("Please fill in all book details.");
    return; // Stop execution if book details are incomplete
  }
  const book = new MakeBook(bookName, bookAuthor, bookPages);
  console.log(book);
  list(book);
}

const listContainer = document.getElementById("list-container");
document.getElementById("book-details").addEventListener("submit", addBook);

function list(book) {
  const bookList = document.createElement("div");
  bookList.classList.add("book-item");
  bookList.innerHTML = `
    <div class="booklist">BOOK NAME: ${book.Name}<br>
    AUTHOR NAME: ${book.Author}<br>
    NO. OF PAGES: ${book.Pages} pages</div>
  `;
  listContainer.appendChild(bookList);
}
