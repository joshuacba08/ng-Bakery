import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../../assets/data/products.models';

@Component({
  selector: 'app-item-count',
  templateUrl: './item-count.component.html',
  styleUrls: ['./item-count.component.scss']
})
export class ItemCountComponent implements OnInit {
  @Input() product:any;
  count:number = 1;
  stock:number = 0;

  constructor( private cartService:CartService ){ }

  ngOnInit(): void {
    this.stock = this.product.stock;
  }

  addCount(num:number){
    this.count += num;
  }

  addToCart(product:Product){

    console.log('add product',product,this.count);
    this.cartService.addToCart(product, this.count);
  }

}
