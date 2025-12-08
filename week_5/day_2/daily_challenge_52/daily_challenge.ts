// Daily Challenge: Building a Library System with TypeScript Classes and Interfaces

// Instructions
// Create a simple library system with TypeScript:

// Interface Book: Define an interface Book with the following properties:

// title (string)
// author (string)
// isbn (string)
// publishedYear (number)
// An optional genre property (string)

// Class Library: Create a class Library with:
// A private property books (array of Book).
// A public method addBook to add a new book to the library.
// A public method getBookDetails that returns details of a book based on the isbn.

// Class DigitalLibrary: Create a class DigitalLibrary that extends Library and adds:
// A readonly property website (string) for the library’s website.
// A public method listBooks that returns a list of all book titles in the library.

// Create an instance of DigitalLibrary, add some books to it, and then print out the details of the books and the list of all book titles.

interface Book {
    title: string
    author: string
    isbn: string
    publishedYear: number 
    genre?: string
}

class Library {
    private books: Book[]

    constructor() {
        this.books = []
    }

    public addBook(book: Book): void {
        this.books.push(book)
    }

    public getBookDetails(isbn: string): string {
        for (let book of this.books) {
            if (book.isbn === isbn) {
                if (book.genre) {
                    return `details (${book.isbn}): Title: ${book.title}, Author: ${book.author}, Year: ${book.publishedYear}, Genre: ${book.genre}`

                } else {
                    return `details (${book.isbn}): Title: ${book.title}, Author: ${book.author}, Year: ${book.publishedYear}`
                }

            }
        }
        return "Book not found."
    }

    protected getAllBooks(): Book[] {
        return this.books
    }
}

class DigitalLibrary extends Library {
    readonly website: string

    constructor(website: string) {
        super()
        this.website = website
    }

    public listBooks(): string[] {
        let list = []
        for (let book of this.getAllBooks()) {
            list.push(book.title)
        }
        return list
    }
}

const book1: Book = {
    title: "Harry Potter",
    author: "J.K Rowling",
    isbn: "A123",
    publishedYear: 1997,
    genre: "Fantasy"
}

const book2: Book = {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    isbn: "B456",
    publishedYear: 2008
}
const myLibrary = new DigitalLibrary("mylibrary.com")


myLibrary.addBook(book1)

console.log(myLibrary.listBooks())

myLibrary.addBook(book2)

console.log(myLibrary.getBookDetails("B456"))

console.log(myLibrary.getBookDetails("A123"))

console.log(myLibrary.listBooks())