import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { BetterhighlightDirective } from './betterhighlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    BetterhighlightDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
