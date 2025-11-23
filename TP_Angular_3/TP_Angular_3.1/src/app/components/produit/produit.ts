import { CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, Output,Input } from '@angular/core';

@Component({
  selector: 'app-produit',
  imports: [CurrencyPipe,],
  templateUrl: './produit.html',
  styleUrl: './produit.css',
})
export class Produit {
  @Input() nomProduit!: string | undefined;
  @Output() messageEvent = new EventEmitter<string>();
  prixProduit : number = 1.99;
  imageUrl : string = 'https://img.freepik.com/premium-vector/red-apple-with-green-leaf-it_835895-11599.jpg?semt=ais_incoming&w=740&q=80'
  afficherAlerte() {
    this.messageEvent.emit('Produit ajouté au panier !');
  }
}
