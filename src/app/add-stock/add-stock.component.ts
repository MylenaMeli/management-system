import { Component } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-stock',
  imports: [CommonModule,FormsModule],
  templateUrl: './add-stock.component.html',
  styleUrl: './add-stock.component.css'
})
export class AddStockComponent {
    constructor(private produitService: ProductService, private router:Router) {}

 name="";
  quantite=0;
  cartons=0;
 ajouterProduit() {
    const produit = new Product(this.name, this.quantite, this.cartons);

    this.produitService.createProduit(produit).subscribe({
      next: (response) => {
       alert('✅ Produit ajouté avec succès :');
       this.router.navigate(["/admin/stock"])
      },
      error: (err) => {
        console.error('❌ Erreur lors de l’ajout du produit :', err);
      }
    });
  }
}
