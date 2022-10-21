import { Injectable } from '@angular/core';
import { ProductCart, Product } from '../../assets/data/products.models';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart:ProductCart[]=[];
  constructor() { }

  addToCart(product:Product,qty:number){
    this.cart.push({
      ...product,
      qty
    });
    console.log(this.cart);
  }

}
