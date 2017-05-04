import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ModalModule } from "ng2-modal";

import { routing } from './app.routing';

import { NgaModule } from './theme/nga.module';
import { PagesModule } from './pages/pages.module';

import { AppState, InternalStateType } from './app.service';

import { GlobalState } from './global.state';

//Application wide providers
const APP_PROVIDERS = [
  AppState,
  GlobalState
];


export type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

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
    NgbModule.forRoot(),
    PagesModule,
    routing
  ],
  providers: [APP_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { 
    constructor(public appState: AppState) {
  }
}
