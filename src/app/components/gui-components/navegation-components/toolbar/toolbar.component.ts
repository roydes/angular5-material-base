import { Component, OnInit,ChangeDetectorRef,Input,Output,EventEmitter } from '@angular/core';
import {GUINavegationComponent} from '../navegation.component'
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent extends GUINavegationComponent {
  backgroundColor:string;
  @Input()
  title:string=""; 
  @Output()
  sidenavOpenedEmitter:EventEmitter<boolean>;
  sidenavOpened:boolean=false;
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    super(changeDetectorRef,media); 
    this.sidenavOpenedEmitter= new EventEmitter<boolean>();
  }

  ngOnInit() {
  }
  sidebarOpened(){
     this.sidenavOpened=!this.sidenavOpened;
     this.sidenavOpenedEmitter.emit(this.sidenavOpened);
  }

}