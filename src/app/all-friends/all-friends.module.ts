import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllFriendsPageRoutingModule } from './all-friends-routing.module';

import { AllFriendsPage } from './all-friends.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllFriendsPageRoutingModule
  ],
  declarations: [AllFriendsPage]
})
export class AllFriendsPageModule {}
