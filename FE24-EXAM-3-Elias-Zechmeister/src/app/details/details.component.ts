import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { Product } from '../products/product.model';
import { PRODUCTS } from '../products/products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-details',
  imports: [RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
product: Product | undefined;
constructor(private route:ActivatedRoute,
            private cartService: CartService

){}


ngOnInit(): void {
  const productID = Number(this.route.snapshot.params[`id`]);
  this.product = PRODUCTS.find(

    (p)=>p.id === productID
  )
}

onAddToCart(){
  if(this.product){
  this.cartService.addToCart(this.product)
}
}
}
