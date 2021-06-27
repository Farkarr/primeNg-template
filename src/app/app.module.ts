import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ChanclaComponent } from './components/chancla/chancla.component';

// PrimenNg modules
import { MegaMenuModule } from 'primeng/megamenu';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ChanclaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MegaMenuModule,
    ButtonModule,
    DataViewModule,
    CardModule,
    RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
