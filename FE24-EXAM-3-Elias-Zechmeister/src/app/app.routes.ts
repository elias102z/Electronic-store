import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { AboutUSComponent } from './about-us/about-us.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [

{path: `cart`, component: CartComponent },
{path: `about-us`, component: AboutUSComponent },
{path: `details/:id`, component: DetailsComponent },
{path: ``, component: HomeComponent },
{path: `products`, component: ProductsComponent },


];
