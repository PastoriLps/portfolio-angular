import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { CardsComponent } from './cards/cards.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ModalService } from './services/modal/modal.service';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    CardsComponent,
    GalleryComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([])
  ],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
