import { Component } from '@angular/core';
import { MediaMatcher} from '@angular/cdk/layout';
import { ChangeDetectorRef} from '@angular/core';
import { GUIComponent } from './components/gui-components/gui-component/gui.component'
@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent extends GUIComponent {
  sidenavOpened:boolean=false;
  name = 'Angular 5-Material-Base Line ';
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    super(changeDetectorRef,media);
  }
  sidenavOpenedChange(opened){
    this.sidenavOpened=opened;
    console.log(this.sidenavOpened);

  }

}
