import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  
   cartList= []; 
   count;
  constructor(private cartDao: CartService){ 
  }
    
  ngOnInit() {
    this.cartList = this.cartDao.getCartList();
    this.count = this.cartList.length;  
  }
  delete(item){
    this.cartDao.removeFromCart(item); 
    this.cartList =this.cartDao.getCartList();
    this.count = this.cartList.length;
  }

}


