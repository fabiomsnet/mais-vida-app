import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailMedicoPage } from './detail-medico';

@NgModule({
  declarations: [
    DetailMedicoPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailMedicoPage),
  ],
})
export class DetailMedicoPageModule {}
