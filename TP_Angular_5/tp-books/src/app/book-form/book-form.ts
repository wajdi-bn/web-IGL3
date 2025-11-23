import { Component, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Book } from '../book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-form',
  imports: [FormsModule, CommonModule],
  standalone: true,
  templateUrl: './book-form.html',
  styleUrl: './book-form.css',
})
export class BookForm implements OnChanges {
  @Output() bookAdded = new EventEmitter<Book>();
  @Input() updatedBook: Book | null = null;
  @Input() categories: string[] = [];

  buttonlabel = "Add Book";

  newBook: Book = this.getEmptyBook();

  ngOnChanges(changes: SimpleChanges) {
    if (changes['updatedBook'] && this.updatedBook) {
      this.newBook = { ...this.updatedBook };
      this.buttonlabel = "Update Book";
    }
  }

  // Préparer un livre vide
  getEmptyBook(): Book {
    return {
      id: 0,
      title: '',
      author: '',
      publisherEmail: '',
      publisherPhone: '',
      releaseDate: new Date(),
      category: '',
      isAvailable: false,
      stock: undefined
    };
  }

  // Vérifier validité de la date (>1900)
  isReleaseDateValid(): boolean {
    if (!this.newBook.releaseDate) return true;
    return new Date(this.newBook.releaseDate).getFullYear() >= 1900;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      alert("Impossible d'ajouter ce Livre");
      return;
    }

    // Si c'est une mise à jour, garder l'id existant
    if (!this.updatedBook) {
      this.newBook.id = Math.floor(Math.random() * 10000);
    } else {
      this.newBook.id = this.updatedBook.id;
    }

    this.bookAdded.emit({ ...this.newBook });

    // Réinitialiser
    form.resetForm();
    this.newBook = this.getEmptyBook();
    this.buttonlabel = "Add Book";
  }
}
