import {Compiler, Component, Injector, NgModule, NgModuleRef, ViewChild, ViewContainerRef, OnInit,ChangeDetectorRef,Input,Output } from '@angular/core';
import {GUINavegationComponent} from '../navegation.component'
import {MediaMatcher} from '@angular/cdk/layout';
import {GUIModule} from '../../gui.module';
@Component({
  moduleId:module.id,
  selector: 'app-menu',
 // templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  template:`
      <h1>I am parent App component</h1>
      <div class="insert-a-component-inside">
          <ng-container #vc></ng-container>
      </div>
  `,
})
export class MenuComponent extends GUINavegationComponent{
   compiler: Compiler;
   injector: Injector;
   moduleRef: NgModuleRef<any>;
   
   @ViewChild('vc', {read: ViewContainerRef}) container: ViewContainerRef;
   @Input() menuMap:any;

    constructor( _compiler: Compiler,
                 _injector: Injector,
                 _moduleRef: NgModuleRef<any>,
				 _container: ViewContainerRef,
                 _changeDetectorRef: ChangeDetectorRef, 
                 _media: MediaMatcher) {
		super(_changeDetectorRef,_media); 
		this.compiler = _compiler;
		this.injector = _injector;
		this.moduleRef = _moduleRef;
		
		console.log(_container);
		this.container = _container;
		console.log(this.container)
     }
 
	ngOnInit(){
		console.log(this.container);
	}

    ngAfterViewInit() {
		let menus=[
		"<button mat-menu-item mat-button [matMenuTriggerFor]='animals'>Animal index</button>",
		"<mat-menu #animals matMenu><button mat-menu-item  [matMenuTriggerFor]='animals1'>Animal index</button></mat-menu>",
		"<mat-menu #animals1 matMenu><button mat-menu-item  [matMenuTriggerFor]='animals1'>Animal index</button></mat-menu>",
	];
		for(let i=0;i<3;i++){
			const template = menus[i];

			const tmpCmp = Component({template: template})(MenuComponent);
			const tmpModule = NgModule({declarations: [tmpCmp],exports:[tmpCmp]})(GUIModule);
			console.log(this.compiler);
			console.log(this.container);
			this.compiler.compileModuleAndAllComponentsAsync(tmpModule)
				.then((factories) => {
					console.log(this.container)
					console.log(this.compiler)
					console.log(factories)
					const f = factories.componentFactories[0];
					const cmpRef = f.create(this.injector, [], null, this.moduleRef);
					console.log(cmpRef);
					cmpRef.instance.name = 'B component';
					this.container.insert(cmpRef.hostView);
				})
		}
    }

}
