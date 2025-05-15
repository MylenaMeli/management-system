import { Component, ElementRef, ViewChild } from '@angular/core';
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

@ViewChild('printSection') printSection!: ElementRef;

  printDiv() {
    if (!this.printSection) {
      console.error('printSection is not defined');
      return;
    }

    const printContents = this.printSection.nativeElement.innerHTML;
    const popupWin = window.open('', '_blank', 'width=800,height=600');

    if (popupWin) {
      popupWin.document.open();
      popupWin.document.write(`
        <html>
          <head>
            <title>Impression</title>
            <style>
              body { font-family: Arial; padding: 20px; }
              table { width: 100%; border-collapse: collapse; }
              td, th { border: 1px solid #ccc; padding: 8px; }
            </style>
          </head>
          <body onload="window.print(); window.close();">
            ${printContents}
          </body>
        </html>
      `);
      popupWin.document.close();
    } else {
      alert('Impossible d’ouvrir la fenêtre d’impression (popup bloqué ?)');
    }
  }


constructor(private productService:ProductService){

}
loadProducts(): void {
  this.productService.getAllProducts().subscribe((data) => {
    this.products = data;
  });
}

 deleteProduct(id: number) {
  this.productService.delete(id).subscribe(
    () => {
      console.log('Le produit a été supprimé avec succès.');
      // Effectuez les actions supplémentaires requises après la suppression.
      this.refreshPage(); // Refresh the page only after successful deletion.
    },
    (error) => {
      console.error('Erreur lors de la suppression du produit:', error);
      // Optionally, handle the error (e.g., show an alert).
    }
  );
}

  refreshPage() {
  window.location.reload();
}
}
