import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component,OnInit,} from '@angular/core';
import {GUIComponent} from '../gui-component/gui.component'
export class GUINavegationComponent extends GUIComponent {
   

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    super(changeDetectorRef,media);
  }

}