import { Injectable } from '@angular/core';
import { Product } from './products/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
private cart:Product[] = [];

addToCart(product: Product){
this.cart.push(product);



}

}
