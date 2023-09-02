// TODO: DRY
class Book {
    constructor(title, author, publicationYear) {
        this.title = title;
        this.author = author;
        this.publicationYear = publicationYear;
    }
    getBookTitle() { return this.title; }
    getBookDetails() {
        return `Title: ${this.title}, by ${this.author} in ${this.publicationYear}`;
    }
}
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
        console.log(`New book: ${book.getBookTitle()} added to Library`);
    }
    listBooks() {
        console.log(`Books list in Library!!!`);
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.getBookDetails()}`);
        });
    }
}
const myLibrary = new Library();
myLibrary.addBook(new Book('Harry Potter', 'J.K. Rowling', 1937));
myLibrary.addBook(new Book('Mavel', 'Justin Lee', 1959));
myLibrary.listBooks();
