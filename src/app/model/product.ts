export class Product {
  name: string;
  quantite: number;
  cartons: number;
  total: number;

  constructor(name: string, quantite: number, cartons: number) {
    this.name = name;
    this.quantite = quantite;
    this.cartons = cartons;
    this.total = this.quantite * this.cartons;
  }
 
}
