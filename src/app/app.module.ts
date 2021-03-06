import { NgModule, enableProdMode, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { EJAngular2Module } from 'ej-angular2';

import { AppComponent } from './app.component';
import { DropDownListAllModule } from '@syncfusion/ej2-ng-dropdowns';
import { ReportViewerComponent } from './reportviewer/reportviewer.component';

import { rootRouterConfig } from './app.routes';

enableProdMode();

class CustomErrorHandler implements ErrorHandler {
  call(error, stackTrace = null, reason = null) {
    console.log(error + "\n" + stackTrace);
  }
  handleError(error: any): void {
    console.log(error);
  }
}

@NgModule({
  imports: [
    BrowserModule, FormsModule, HttpModule, DropDownListAllModule, RouterModule.forRoot(rootRouterConfig, { useHash: true }), EJAngular2Module.forRoot()
  ],
  declarations: [
    AppComponent, ReportViewerComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
