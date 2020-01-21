import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaylistComponent } from './playlist.component';
import { DetailComponent } from './detail/detail.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  {
    path: '', children: [
      { path: '', component: PlaylistComponent },
      { path: 'create', component: CreateComponent },
      { path: 'detail', component: DetailComponent }

    ]
  }]
  ;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaylistRoutingModule { }
