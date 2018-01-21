import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddMedicoPage } from './add-medico';

@NgModule({
  declarations: [
    AddMedicoPage,
  ],
  imports: [
    IonicPageModule.forChild(AddMedicoPage),
  ],
})
export class AddMedicoPageModule {}
