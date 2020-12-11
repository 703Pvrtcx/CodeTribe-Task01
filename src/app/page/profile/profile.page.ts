import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ThemeComponent } from './theme/theme.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  selectedSegment = 'login';
  loggedIn = true;
  constructor(public popoverController: PopoverController) { 
    if(this.loggedIn) {
      this.selectedSegment = 'myprofile';
    }
  }

  ngOnInit() {
  }

  segmentChanged($event){
    this.selectedSegment = $event.detail.value;
  }

  async openThemePopover(ev: any) {
    const popover = await this.popoverController.create({
      component: ThemeComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
}
