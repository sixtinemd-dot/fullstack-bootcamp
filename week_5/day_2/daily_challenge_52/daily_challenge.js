// Daily Challenge: Building a Library System with TypeScript Classes and Interfaces
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.getBookDetails = function (isbn) {
        for (var _i = 0, _a = this.books; _i < _a.length; _i++) {
            var book = _a[_i];
            if (book.isbn === isbn) {
                if (book.genre) {
                    return "details (".concat(book.isbn, "): Title: ").concat(book.title, ", Author: ").concat(book.author, ", Year: ").concat(book.publishedYear, ", Genre: ").concat(book.genre);
                }
                else {
                    return "details (".concat(book.isbn, "): Title: ").concat(book.title, ", Author: ").concat(book.author, ", Year: ").concat(book.publishedYear);
                }
            }
        }
        return "Book not found.";
    };
    Library.prototype.getAllBooks = function () {
        return this.books;
    };
    return Library;
}());
var DigitalLibrary = /** @class */ (function (_super) {
    __extends(DigitalLibrary, _super);
    function DigitalLibrary(website) {
        var _this = _super.call(this) || this;
        _this.website = website;
        return _this;
    }
    DigitalLibrary.prototype.listBooks = function () {
        var list = [];
        for (var _i = 0, _a = this.getAllBooks(); _i < _a.length; _i++) {
            var book = _a[_i];
            list.push(book.title);
        }
        return list;
    };
    return DigitalLibrary;
}(Library));
var book1 = {
    title: "Harry Potter",
    author: "J.K Rowling",
    isbn: "A123",
    publishedYear: 1997,
    genre: "Fantasy"
};
var book2 = {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    isbn: "B456",
    publishedYear: 2008
};
var myLibrary = new DigitalLibrary("mylibrary.com");
myLibrary.addBook(book1);
console.log(myLibrary.listBooks());
myLibrary.addBook(book2);
console.log(myLibrary.getBookDetails("B456"));
console.log(myLibrary.getBookDetails("A123"));
console.log(myLibrary.listBooks());
