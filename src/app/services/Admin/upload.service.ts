import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  item;
  price;
  image: Observable<any>;

  uploadPercent: Observable<number>;
  downloadURL: Observable<any>;
  
  constructor(
    private storage: AngularFireStorage,
    private firestore: AngularFirestore,
    private router: Router
    ) {}
  uploadFile(event) {
 /*
      const file = event.target.files[0];
      const filePath = 'Devices/Images';
      const fileRef = this.storage.ref(filePath);
      const task = fileRef.put(file, { customMetadata: { blah: 'blah' } });
*/
   const file = event.target.files[0];
    const filename = file.name;
    const fileExt = filename.split('.').pop();
    const filePath = Math.random().toString(36).substring(2) + '.' + fileExt;
    const fileRef = this.storage.ref(`images/${filePath}`);
    const task = this.storage.upload(`images/${filePath}`, file);

    this.uploadPercent = task.percentageChanges();

    task.snapshotChanges().pipe(
      finalize(() => this.downloadURL =  fileRef.getDownloadURL())
    ).subscribe()
  
    task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(downloadURL => {
          this.image = downloadURL;
          });
      })
     )
  .subscribe()

  }
  uploadItem() {

    window.alert("upload item" + name);
    let id = this.firestore.createId();
    this.firestore.collection('Snacks').doc(id).set({
      name: "Paneer masala",
      qty: "1",
      price: "56.90",
      description: "Papikies Paneer masala ",
      image: this.image
    }).catch(error => {
      console.log("not added error ->" + error);
    }).then(() => {
      console.log("added");
      this.router.navigate(["/tabs/download"]);
    })
  }
  uploadImage(event){
    const file = event.target.files[0];
    const filePath = 'images' + this.makeid(3);
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath,file);
    
    //const task1 = fileRef.put(file);
    //Observe percentage changes
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(
      finalize(() => this.downloadURL =  fileRef.getDownloadURL())
    ).subscribe()
    return this.uploadPercent;
  }
  makeid(length){
    var result ='';
    var characters ='ABCDEFGHIJKLMNOPQRTSUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for(var i =0; i < length; i++){
      result += characters.charAt(Math.random()* charactersLength);
    }
    return result;
  }
}
