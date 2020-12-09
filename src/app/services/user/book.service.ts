import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private asf: AngularFirestore) { }

  addBook(book){
    this.asf.collection('Books').add(book).then(() => {
      //Successful
      alert('Book was added');
    }).catch(err => { 
      alert(err.message + ' Book was unable to be added!');
    })
  }
  getBooks(){
    return this.asf.collection('Books').snapshotChanges();
  }

  getUserBooks(userID){
    return this.asf.collection('Books', ref => ref.where('userID','==', userID)).snapshotChanges();
  }

}
