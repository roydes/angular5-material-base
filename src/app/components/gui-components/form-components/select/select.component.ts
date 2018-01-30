import { Component, Input, Output, EventEmitter } from '@angular/core';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
	selector    : 'select2',
  	templateUrl : './select2.component.html'
})
export class SelectComponent{
	@Input() options: MOption[] = [];
	@Input() value: any;
	@Input() placeholder: string;
	@Input() name     : string  = '';
	@Input() required : boolean = false;
	@Input() group    : FormGroup = new FormGroup({});

	@Output() valueChange:EventEmitter<String> = new EventEmitter<String>()

	//TODO: Falta ver como sincronizar los cambios los radio.
	update(value) {
		this.valueChange.emit(value);
	}
}

export class MOption{
	value: any;
	label: any;
}