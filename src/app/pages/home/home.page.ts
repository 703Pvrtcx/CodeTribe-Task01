import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PERSON_LIST } from 'src/app/mocks/person.mock';
import { BookService } from 'src/app/services/user/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  bookList= []; 
  personList = PERSON_LIST;
  constructor(private bookDao: BookService,private router: Router) { }

  ngOnInit() {
    this.getBooks();
  }
  goProfile(){
   
    this.router.navigateByUrl('tabs/profile');
 }


  getBooks(){
    this.bookDao.getBooks().subscribe(data => {
      this.bookList =  data.map( e =>  {
        return {
          key: e.payload.doc.id,
          ...e.payload.doc.data() as Book
        } as Book

      });
      console.log('Firebase ',this.bookList);
    })
}

  
  goSignOut(){
    this.router.navigateByUrl('home');
  }
  getPerson(person){
    console.log(person);
  }

}
