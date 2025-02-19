import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParticipantItemComponent } from './participant-item/participant-item.component';
import { ParticipantsListComponent } from './participants-list/participants-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ParticipantItemComponent,
    ParticipantsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
