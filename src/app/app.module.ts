import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsCollectionComponent } from './components/cards-collection/cards-collection.component';
import { NavigationBarComponent } from './components/PageLayout/navigation-bar/navigation-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsCollectionComponent,
    NavigationBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
