import { Component,Input,Output,EventEmitter,} from '@angular/core';
import { Book } from '../book';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-book-list',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookList {
  //transmettre la liste des Book du Book-container au Book-list
  @Input() books:Book[]=[]; 
  @Output() delete = new EventEmitter<number>();
  @Output() update=new EventEmitter<Book>()



}
