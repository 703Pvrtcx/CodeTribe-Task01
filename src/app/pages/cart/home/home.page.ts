import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CartService } from 'src/app/services/cart/cart.service';
 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
 
  cart = [];
  items = [];
  
  pizza;
  burger;
  desserts;
  snacks;
  drinks;

  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 10,
    centeredSlides: true
  };
 
  constructor(private router: Router, private cartService: CartService, public authService: AuthenticationService
  ) { }
 
  ngOnInit() {
    this.items = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
    this.pizza = this.cartService.getPizza();
    this.burger = this.cartService.getBurgers();
    this.desserts = this.cartService.getDesserts();
    this.snacks = this.cartService.getSnacks();
    this.drinks = this.cartService.getDrinks();
  }
  getCategory(category){
    switch (category) {
      case 'Pizza':
        return this.pizza;
        break;
        case 'Burger':
          return this.burger;
          break;
          case 'Desserts':
        return this.desserts;
        break;
        case 'Snacks':
        return this.snacks;
        break;
        case 'Drinks':
        return this.drinks;
        break;
      default:
        break;
    }
  }

  addToCart(product) {
    this.cartService.addProduct(product);
  }
 
  openCart() {
    this.router.navigate(['cart']);
  }

}