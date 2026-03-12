import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatalistComponent } from './datalist/datalist.component';
import { DetailsComponent } from './datalist/details/details.component';
import { TruncationPipe } from './datalist/truncation.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DatalistComponent,
    DetailsComponent,
    TruncationPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
