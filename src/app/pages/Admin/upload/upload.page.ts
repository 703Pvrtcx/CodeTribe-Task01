import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { Router, ActivatedRoute } from "@angular/router"
import { catchError,map, finalize } from 'rxjs/operators';
import { UploadService } from 'src/app/services/Admin/upload.service';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
})
export class UploadPage implements OnInit {

  uploadPercentage;
  filename: string;

  item: Observable<string>;
  price: Observable<number>;
  image: Observable<string>;
  description: Observable<string>

  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;

  constructor(private router:Router,
    private uploadDao: UploadService,
     private afStorage: AngularFireStorage,
     private firestore: AngularFirestore) {
   }
   onClick(){
    this.image = this.uploadDao.image ;
    this.item  = this.uploadDao.item ;
    this.price = this.uploadDao.price;
    this.price = this.uploadDao.price;
    this.uploadDao.uploadItem();
    }
  uploadFile(event){
    
     this.uploadDao.uploadFile(event);
     this.uploadPercentage = this.uploadDao.uploadPercent;
    
     //this.uploadDao.uploadItem();
  }
  ngOnInit(): void{
    //this.downloadURL = this.afStorage.ref('/images/').getDownloadURL();
  }
}
