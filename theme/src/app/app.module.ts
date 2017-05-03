import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ModalModule } from "ng2-modal";

import { routing } from './app.routing';

import { NgaModule } from './theme/nga.module';
import { PagesModule } from './pages/pages.module';



import { GlobalState } from './global.state';

const APP_PROVIDERS = [  
  GlobalState
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ModalModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    NgaModule.forRoot(),
    PagesModule,
    routing
  ],
  providers: [APP_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
