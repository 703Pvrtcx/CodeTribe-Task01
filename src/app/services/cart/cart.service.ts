import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
 
@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  private data = [
    {
      category: 'Kota',
      expanded: true,
      products: [
        { id: 0, name: 'Salami', price: '8' },
        { id: 1, name: 'Classic', price: '5' },
        { id: 2, name: 'Tuna', price: '9' },
        { id: 3, name: 'Hawai', price: '7' }
      ]
    },
    {
      category: 'Nyama',
      products: [
        { id: 4, name: 'Mac & Cheese', price: '8' },
        { id: 5, name: 'Bolognese', price: '6' }
      ]
    },
    {
      category: 'Salad',
      products: [
        { id: 6, name: 'Ham & Egg', price: '8' },
        { id: 7, name: 'Basic', price: '5' },
        { id: 8, name: 'Ceaser', price: '9' }
      ]
    }
  ];

  pizza;
  burgers;
  desserts;
  snacks;
  drinks;

  myData= [];
 
  private cart = [];
 
  constructor(private firestore: AngularFirestore) { }
 
  getPizza(){
    this.firestore.collection<any>("Pizza").valueChanges({idField: 'id'}).subscribe(storeItems =>{
        this.pizza = storeItems;
        console.log(this.pizza);
    })
    return this.pizza;
  }
  getBurgers(){
    this.firestore.collection<any>("Burgers").valueChanges({idField: 'id'}).subscribe(storeItems =>{
      this.burgers = storeItems;
      console.log(this.burgers);
    })
  }
  getDesserts(){
    this.firestore.collection<any>("Desserts").valueChanges({idField: 'id'}).subscribe(storeItems =>{
      this.desserts = storeItems;
      console.log(this.desserts);
      })
  }
  getDrinks(){
    this.firestore.collection<any>("Drinks").valueChanges({idField: 'id'}).subscribe(storeItems =>{
      this.drinks = storeItems;
      console.log(this.drinks);
      })
  }
  getSnacks(){
    this.firestore.collection<any>("Snacks").valueChanges({idField: 'id'}).subscribe(storeItems =>{
      this.snacks = storeItems;
      console.log(this.snacks);
      })
      
  }
  getData(){
    this.myData.push(this.pizza,this.burgers,this.desserts,this.snacks,this.drinks);
    return this.myData;
  }

  getProducts() {
    return this.data;
  }
 
  getCart() {
    return this.cart;
  }
 
  addProduct(product) {
    this.cart.push(product);
  }
 
}