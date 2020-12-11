import { Injectable } from '@angular/core';
import { Product } from './../../app/mocks/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  data: Product[] = [
    { id: 1,
      name: 'Big Mac',
      price: 43.90,
      qty: 1,
      imgPath: 'https://img1.wsimg.com/isteam/stock/2999/:/',
      category: 'PIZZA',
    },
    { id: 2,
      name: 'Regular Burger',
      price: 35.79,
      qty: 1,   
      imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSr12w46jsCKxktN9BXHUJIqCevRZAvPIVKNJkDoI4UpEdyEHkK',
      category: 'BURGER',
    },
    { id: 3,
      name: 'Chocolate Biscuit',
      price: 29.60,
      qty: 1,
      imgPath: 'https://i.pinimg.com/originals/b2/5b/56/b25b560ed6f5b4d8372aa508878ab9b8.jpg',
      category: 'DESSERTS',
    },
    { id: 4,
      name: 'Cheese Burger',
      price: 13.80,
      qty: 1,
      imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQU3c9_IuP9R7KqnuhfmYBDjMW4nuYvgVXxCVHR77FOG7PDw8mh',
      category: 'SNACKS',
    },
    { id: 5,
      name: 'Gin & Tonic',
      price: 49.60,
      qty: 1,
      imgPath: 'https://miro.medium.com/max/11520/1*wRSrqe_WdsPsv4XdHDou6Q.jpeg',
      category: 'DRINKS',
    }
  ]
  pizzaProducts = [
    {id: 1, imgPath: 'https://img1.wsimg.com/isteam/stock/2999/:/', price: 12.50 , name: 'Cheese burst pizza', qty: 1},
    {id: 2,imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTeN9ZmxOgfpz2fNKoay9gqh5sgKCkpSzbjEYbNuby5dhnJV-_C', price: 15 , name: 'Tomato corn pizza', qty: 1},
    {id: 3, imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS2VIH8gqiZXtM5XbkSKefPMidImjnfSku_imKBCEaOB8Xxhdba', price: 5.90 , name: 'Cheesy smoke paper pizza', qty: 1},
    {id: 4,imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7x6T2N0tJvT5QUkVL4ebbU-0CLxlpFGtT9kHwVttKu8odx3x5', price: 2.5 , name: 'Mashroom magic pizza', qty: 1},
    {id: 5,imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSH2laiUvjvONmyzXwco_fMEuulEB2vFhX1tCUcjwb02NU5d4gC', price: 16.2 , name: 'Corn paper pizza', qty: 1},
    {id: 6,imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTG2IO9fCVl7YpNo5wv2CtMOBKUNVBc5W47sh_wUOTwdzkgtwqW', price: 15.5 , name: 'Tasty herbs pizza', qty: 1},
    {id: 7,imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQIGsLK0SsZ7lG0JcJI5oDEu3yfim78gfTwAqJkGixwo19TIkEi', price: 8.95 , name: 'Veggy cheesy smoky pizza', qty: 1},
    {id: 8 ,imgPath: 'https://i2.wp.com/www.vegrecipesofindia.com/wp-content/uploads/2018/05/paneer-pizza-recipe-1-500x375.jpg', price:  4.5, name: 'Paneer pyara pizza'}
  ];
  burgerProducts = [
    {id: 9,imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSr12w46jsCKxktN9BXHUJIqCevRZAvPIVKNJkDoI4UpEdyEHkK', price: 12.50, name: 'Aloo tikki burger', qty: 1 },
    {id: 10,imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_gjQD-qDUIRd23JT36NRkzZyAsoWzfZ6lngWMkDPqv9x_1e3O', price: 5.50, name: 'Fresh paneer burger', qty: 1},
    {id: 11,imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQOtgZD6lAG5SzIwAyuSpcm5_BCHlowjYY-92M0XRrjEwP5OAvs', price: 6.50, name: 'Cheese regular', qty: 1},
    {id: 12,imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRW-O0XOzIyC3kYGwDDSggxg8fmHQG9PZQ6A47swIi3NOPcKQ_5', price: 9, name: 'Masala magic burger', qty: 1},
    {id: 13,imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSS8UqX9n2WHrP5EKfpxKV_tGY8oHUiCmVbttP65SXiBOQRrl3e', price: 12, name: 'Corn paper paneer', qty: 1},
    {id: 14,imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqfASPBD0EMycAVIeKolF-M9i3XXJ4j77bnlaes7NwqHiVipbs', price: 10, name: 'Peas wopper burger', qty: 1}
  ];
  dessertsProducts = [
    {id: 15,imgPath: 'https://tmbidigitalassetsazure.blob.core.windows.net/secure/RMS/attachments/37/1200x1200/Mini-Chocolate-Wafer-Cakes_exps106462_TH2379807A11_02_5bC_RMS.jpg', price: 7.5, name: 'Choclate bisclate', qty: 1},
    {id: 16,imgPath: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Desserts.jpg', price: 9, name: 'Choco scuba', qty: 1},
    {id: 17,imgPath: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190326-pin-a-colada-bars-259-1555081178.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=640:*', price: 5, name: 'Sweet straberry', qty: 1},
    {id: 18,imgPath: 'https://i.pinimg.com/originals/b2/5b/56/b25b560ed6f5b4d8372aa508878ab9b8.jpg', price: 6.5, name: 'Choco pineapple', qty: 1},
    {id: 19,imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSKOd9cBYMvLtt_KPPJO4SO1oAzKgHkkGSkODC3hy5sU8vD60UX', price: 4.5, name: 'Orange masti', qty: 1},
    {id: 20,imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLvzPFeEZPC5fZRu1qMVqYEM9ejv-hjbf0Km5IEI9b3jLMjBrC', price: 5, name: 'Choclate white sauce', qty: 1},
    {id: 21,imgPath: 'https://tmbidigitalassetsazure.blob.core.windows.net/secure/RMS/attachments/37/1200x1200/Mini-Chocolate-Wafer-Cakes_exps106462_TH2379807A11_02_5bC_RMS.jpg', price: 6, name: 'Sweet slime', qty: 1},
  ];
  snacksProducts = [
    {id: 22,imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQU3c9_IuP9R7KqnuhfmYBDjMW4nuYvgVXxCVHR77FOG7PDw8mh', price: 11, name: 'Basket bunch', qty: 1},
    {id: 23,imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSEkjJdQR0kZPyX5D0DALOWWOtWOIDCo9ubElmcwtejG006Lxz3', price: 8, name: 'Paneer masala',qty: 1},
    {id: 24,imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-CNLkyisNzItwAoVq9WOcgcxJfkw2AACsp32Z9K3N1eSbJHid', price: 12, name: 'Corn smosa',qty: 1},
    {id: 25,imgPath: 'https://drop.ndtv.com/albums/COOKS/indian-snacks/til-e-paneer.jpg', price: 10, name: 'Crunchy kachori', qty: 1},
    {id: 26,imgPath: 'https://www.thestatesman.com/wp-content/uploads/2017/10/food-samosas.jpg', price: 7, name: 'Masala papad', qty: 1},
    {id: 27,imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQxeDNkRGZCQoMzQ4y2TTgajMOu5yhtpyEj4ZC7mChXs69lUB8a', price: 6, name: 'Matric bhujia', qty: 1}
  ];
  drinksProducts = [
    {id: 28,imgPath: 'https://miro.medium.com/max/11520/1*wRSrqe_WdsPsv4XdHDou6Q.jpeg', price: 2, name: 'Thandai mix', qty: 1},
    {id: 29,imgPath: 'https://c.ndtvimg.com/2019-06/1m2a2or8_vitamin-c-rich-drinks_625x300_25_June_19.jpg', price: 4, name: 'Lassi lajwab', qty: 1},
    {id: 30,imgPath: 'https://snacksandsips.com/wp-content/uploads/2018/08/02-Cherry-Lemonade.jpg', price: 5.5, name: 'Aam panna',qty: 1},
    {id: 31,imgPath: 'https://pizzazzerie.com/wp-content/uploads/2015/07/cherry-lemonade-recipe-pizzazzerie.jpg', price: 6, name: 'Sikanji soda',qty: 1},
    {id: 32,imgPath: 'https://www.fifteenspatulas.com/wp-content/uploads/2015/07/Refreshing-Summer-Drinks-Fifteen-Spatulas-1.jpg', price: 7, name: 'Shrabati sabab', qty: 1},
    {id: 33,imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSD-X5xnvAQXT_T59BU1_acOxlUo3A1TNW23V6Y7KaCPYWWLr5A', price: 3.5, name: 'Kokam shrabat', qty: 1}
  ];


  private cart = []
  private cartItemCount = new BehaviorSubject(0);
  
  constructor() { }
  getProducts(){
    return this.data;
  }
  getCategory(category: string){
    switch (category) {
      case "PIZZA":{ 
        return this.pizzaProducts;
      }break;
      case "BURGER":{
          return this.burgerProducts;
      }break;
      case "DESSERTS":{
        return this.dessertsProducts
      }break;
      case "SNACKS":{
            return this.snacksProducts;
      } break;
      case "DRINKS":{
        return this.drinksProducts;
      }break;
      default:
        break;
    }
  }
  getCart(){
    return this.cart;
  }
  getCartItemCount(){
    return this.cartItemCount;
  }
  addProduct(product) {
    let added = false;
    for (let p of this.cart) {
      if (p.id === product.id) {
        p.qty += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }
 
  decreaseProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        p.qty -= 1;
        if (p.qty == 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }
  increaseProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        p.qty += 1;
      }
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }
  removeProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        this.cartItemCount.next(this.cartItemCount.value - p.qty);
        this.cart.splice(index, 1);
      }
    }
  }
}
