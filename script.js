class MakeBook {
  constructor(Name, Author, Pages) {
    this.Name = Name;
    this.Author = Author;
    this.Pages = Pages;
  }
  set addBook(event){
    event.preventDefault();  
  let bookName = document.getElementById("bookName").value;
  let bookAuthor = document.getElementById("bookAuthor").value;
  let bookPages = document.getElementById("bookPages").value;
  const book = new MakeBook(bookName, bookAuthor, bookPages);  
  console.log(book);
  list(book);
  }
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