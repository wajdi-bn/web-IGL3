import { Component } from '@angular/core';
import { Book } from '../book';
import { FormsModule } from '@angular/forms';
import { BookList } from '../book-list/book-list';
import { BookForm } from '../book-form/book-form';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-container',
  imports: [FormsModule, BookList, BookForm, CommonModule],
  standalone: true,
  templateUrl: './book-container.html',
  styleUrl: './book-container.css',
})
export class BookContainer {
  categories: string[] = [
    "Roman",
    "Science",
    "Histoire",
    "Informatique",
    "Art",
    "Autres"
  ];

  books: Book[] = [];

  updatedBook: Book | null = null;

  addBook(book: Book) {
    if (this.updatedBook) {
      // mise à jour
      const index = this.books.findIndex(b => b.id === book.id);
      if (index !== -1) this.books[index] = book;
      this.updatedBook = null;
    } else {
      // ajout
      this.books.push(book);
    }
  }

  deleteBook(id: number) {
    this.books = this.books.filter(b => b.id !== id);
  }

  updateBook(book: Book) {
    this.updatedBook = { ...book };
  }
}
