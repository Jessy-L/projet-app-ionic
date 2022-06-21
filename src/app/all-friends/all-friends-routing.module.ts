import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllFriendsPage } from './all-friends.page';

const routes: Routes = [
  {
    path: '',
    component: AllFriendsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllFriendsPageRoutingModule {}
