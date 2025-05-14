import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stock',
  imports: [CommonModule],
  templateUrl: './stock.component.html',
  styleUrl: './stock.component.css'
})
export class StockComponent {
products: any[] | undefined;
ngOnInit(){
this.loadProducts();
}
constructor(private productService:ProductService){

}
loadProducts(): void {
  this.productService.getAllProducts().subscribe((data) => {
    this.products = data;
  });
}
}
