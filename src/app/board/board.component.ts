import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { UserService } from '../service/user.service';
import { ProductService } from '../service/product.service';
import { OutputService } from '../service/output.service';

@Component({
  selector: 'app-board',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {
  productCount: number | undefined;
  outputCount: number | undefined;
  constructor(public router: Router  ,private userService: UserService,
     private productService: ProductService,
     private outputService: OutputService) {}

  
  isAtRoot(): boolean {
    return this.router.url === '/admin';
  }

  users: any[] = [];
  userCount: number = 0;


  ngOnInit(): void {
    this.loadUsers();
    this.loadUserCount();
    this.loadProducts();
    this.loadProductsCount();
    this.loadOutputsCount();
  }

  loadUsers(): void {
    this.userService.getAllUsers().subscribe((data) => {
      this.users = data;
    });
}

loadUserCount(): void {
  this.userService.getUserCount().subscribe((data) => {
    this.userCount = data.count;
  });
}
loadProducts(): void {
  this.productService.getAllProducts().subscribe((data) => {
    this.users = data;
  });
}
loadProductsCount(): void {
  this.productService.getProductCount().subscribe((data) => {
    this.productCount = data.count;
  });
}
loadOutputs(): void {
  this.outputService.getAllOutputs().subscribe((data) => {
    this.users = data;
  });
}
loadOutputsCount(): void {
  this.outputService.getOutputCount().subscribe((data) => {
    this.outputCount = data.count;
  });
}
}