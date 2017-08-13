import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {



   constructor(private socialSharing: SocialSharing ,public navCtrl: NavController) {
   }

     shareItem(item) {
         // this code is to use the social sharing plugin
         // message, subject, file, url
         this.socialSharing.share("Check this item:" ," item.title", "item.img")
         .then(() => {
         })
         .catch(() => {
         });
       }



}
