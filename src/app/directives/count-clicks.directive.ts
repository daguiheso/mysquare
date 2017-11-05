import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  // seleccionando solo anclas tags
  selector: 'a[count-clicks]'
})

export class CountClicksDirective {

  clickN = 0;
  // recibe com 1 param el atributo del elemento de html a modificar
  @HostBinding('style.opacity') opacity: number = .1;

  // $event captura el evento y el target es el elemento
  @HostListener('click', ['$event.target']) onClick(btn) {
    console.log('a', btn, "Número de Clicks:", this.clickN++);
    this.opacity += .1;
  }

  constructor() { }

}
