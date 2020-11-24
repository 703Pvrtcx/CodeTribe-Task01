import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cartlist',
  templateUrl: './cartlist.page.html',
  styleUrls: ['./cartlist.page.scss'],
})
export class CartlistPage implements OnInit {
  cart = {} as person;
  cartList = [];
  constructor(private cartDao: CartService, private router:Router) { 
    this.cartList = this.cartDao.getCartList();
  }
  ngOnInit() {
  }
  submit(){
    this.cartDao.addToCart(this.cart);
    console.log('Cart',this.cartDao.getCartList());
  }
  goNext(){
    this.router.navigateByUrl('detail');
  }
}

