// TODO: DRY

class Book {
  constructor(
    private title: string,
    private author: string,
    private publicationYear: number
  ) {}

  getBookTitle(): string { return this.title; }
  
  getBookDetails(): string {
    return `Title: ${this.title}, by ${this.author} in ${this.publicationYear}`
  }
}

class Library {

  private books: Book[] = [];

  addBook(book: Book): void {
    this.books.push(book);
    console.log(`New book: ${book.getBookTitle()} added to Library`);
  }

  listBooks(): void {
    console.log(`Books list in Library!!!`);
    this.books.forEach((book, index) => {
      console.log(`${index + 1}. ${book.getBookDetails()}`);
    })
  }
}

const myLibrary = new Library();

myLibrary.addBook(new Book('Harry Potter', 'J.K. Rowling', 1937));
myLibrary.addBook(new Book('Mavel', 'Justin Lee', 1959));

myLibrary.listBooks();