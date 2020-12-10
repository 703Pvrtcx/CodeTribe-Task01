import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { DownloadService } from 'src/app/services/Admin/download.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-download',
  templateUrl: './download.page.html',
  styleUrls: ['./download.page.scss'],
})
export class DownloadPage implements OnInit {
  items;

  pizza;
  burgers;
  desserts;
  snacks;
  drinks;
  constructor( private firestore: AngularFirestore,
    private cart: CartService,
  ) { }
  ngOnInit() {
    this.firestore.collection<any>("Pizza").valueChanges({idField: 'id'}).subscribe(storeItems =>{
      this.pizza = storeItems;
      console.log(this.pizza);
   })
   this.firestore.collection<any>("Burgers").valueChanges({idField: 'id'}).subscribe(storeItems =>{
    this.burgers = storeItems;
    console.log(this.burgers);
 })
 this.firestore.collection<any>("Desserts").valueChanges({idField: 'id'}).subscribe(storeItems =>{
  this.desserts = storeItems;
  console.log(this.desserts);
})
this.firestore.collection<any>("Snacks").valueChanges({idField: 'id'}).subscribe(storeItems =>{
  this.snacks = storeItems;
  console.log(this.snacks);
})
this.firestore.collection<any>("Drinks").valueChanges({idField: 'id'}).subscribe(storeItems =>{
  this.drinks = storeItems;
  console.log(this.drinks);
})
}
  getPizza(){
    return this.drinks;
  }
  getBurgers(){
    return this.burgers;
  }
  getDesserts(){
    return this.desserts;
  }
  getSnacks(){
    return this.snacks;
  }
  getDrink(){
    return this.drinks;
  }
}
