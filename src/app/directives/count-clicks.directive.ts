import { Directive, HostListener } from '@angular/core';

@Directive({
  // seleccionando solo anclas tags
  selector: 'a[count-clicks]'
})

export class CountClicksDirective {

  clickN = 0;
  // $event captura el evento y el target es el elemento
  @HostListener('click', ['$event.target']) onClick(btn) {
    console.log('a', btn, "Número de Clicks:", this.clickN++);
  }

  constructor() { }

}
