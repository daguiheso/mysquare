import { Directive, OnInit, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
	selector: '[resaltar]'
})

export class ResaltarDirective implements OnInit{
	constructor(private elRef: ElementRef, private renderer: Renderer2){}
	// obteniendo el valor de la variable resaltar que es el nombre de nuestro selector
	@Input('resaltar') plain: string = '';

	// en ngOnInit lo que hacemos es obtener el elemento donde tenemos aplicado el atributo y darles un estilo
	ngOnInit() {
		if (this.plain === 'paid') {
			this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow')
			this.renderer.setStyle(this.elRef.nativeElement, 'font-weight', 'bold')
		}
	}
}