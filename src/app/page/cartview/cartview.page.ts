import { CartService } from '../../services/cart.service';
import { Product } from '../../mocks/product';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cartview',
  templateUrl: './cartview.page.html',
  styleUrls: ['./cartview.page.scss'],
})
export class CartviewPage implements OnInit {

  cart = [];
 
  constructor(private cartService: CartService, 
              private modalCtrl: ModalController, 
              private router: Router) { }
 
  ngOnInit() {
    this.cart = this.cartService.getCart();
  }
 
  decreaseCartItem(product) {
    this.cartService.decreaseProduct(product);
  }
 
  increaseCartItem(product) {
    this.cartService.addProduct(product);
  }
 
  removeCartItem(product) {
    this.cartService.removeProduct(product);
  }
 
  getTotal() {
    return this.cart.reduce((i, j) => i + j.price * j.qty, 0);
  }
 
  close() {
    this.modalCtrl.dismiss();
    this.router.navigateByUrl('');
  }

  carddetails() {
    this.close();
    this.router.navigate(['/payments']);
  }
 
}