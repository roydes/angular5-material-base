import { Component, OnInit,ChangeDetectorRef,Input,Output } from '@angular/core';
import {GUINavegationComponent} from '../navegation.component'
import {MediaMatcher} from '@angular/cdk/layout';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent extends GUINavegationComponent implements OnInit {
  @Input()
  opened:boolean=false;
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    super(changeDetectorRef,media); 
  }
  ngOnInit() {
  }

}