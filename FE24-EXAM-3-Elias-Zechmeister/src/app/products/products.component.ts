import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PRODUCTS } from './products';
import { Product } from './product.model';

@Component({
  selector: 'app-products',

  imports: [CommonModule, RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: Product[] = PRODUCTS;
  
  addToCart(product: Product): void {
    
    console.log('Adding to cart:', product);
    alert(`${product.name} added to cart!`);
   
  }
}