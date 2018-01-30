import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { GuiModule } from './components/gui-components/gui.module';
import { NestedMenuDirective } from './directives/nested-menu.directive';


@NgModule({
  imports:[
            BrowserModule,
            GuiModule
          ],
  declarations: [ AppComponent, NestedMenuDirective],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
