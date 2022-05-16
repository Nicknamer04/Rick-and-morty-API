import { Component, Input,OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-locations-detail',
  templateUrl: './locations-detail.component.html',
  styleUrls: ['./locations-detail.component.scss'],
})
export class LocationsDetailComponent implements OnInit {
  @Input() location: any;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log(this.location);
  }

  async close(){
    await this.modalCtrl.dismiss();
  }

}
