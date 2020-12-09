import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/user/book.service';
import firebase from 'firebase/app';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  myBookList = [];
  constructor(private bookDao: BookService) { }

  ngOnInit() {
    this.getMyBooks();
  }
  getMyBooks(){
    let userID = firebase.auth().currentUser.uid.toString();
    
    this.bookDao.getUserBooks(userID).subscribe(data => {

      this.myBookList = data.map(e => {
        return{
          key: e.payload.doc.id,
          ... e.payload.doc.data() as Book
        } as Book
      })
    });

  }

}
