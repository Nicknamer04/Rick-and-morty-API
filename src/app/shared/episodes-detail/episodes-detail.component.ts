import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-episodes-detail',
  templateUrl: './episodes-detail.component.html',
  styleUrls: ['./episodes-detail.component.scss'],
})
export class EpisodesDetailComponent implements OnInit {
  @Input() episodes: any;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log(this.episodes);
  }

  async close(){
    await this.modalCtrl.dismiss();
  }

}
