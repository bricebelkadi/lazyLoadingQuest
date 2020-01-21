import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistRoutingModule } from './playlist-routing.module';
import { PlaylistComponent } from './playlist.component';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [
    PlaylistComponent,
    CreateComponent,
    DetailComponent],
  imports: [
    CommonModule,
    PlaylistRoutingModule
  ]
})
export class PlaylistModule { }
