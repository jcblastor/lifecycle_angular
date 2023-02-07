import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styles: [
  ]
})
export class Page1Component implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
{
  nombre: string = 'Carlos';
  seconds: number = 0;
  timerSubscription!: Subscription

  // en el constructor hacemos injeccion de dependencias o
  // inicializacion de porpiedades que el componente/html necesita.
  constructor() {
    console.log('Contructor')
  }

  // ngOnInit: luego que el contructor termina, ya podemos tener acceso al html
  // con ngOnInit y aca dentro podemos hacer peticiones http y luego llenar propiedades
  // de manera segura, ya que el constructor las creo previamente.
  ngOnInit(): void {
    console.log('ngOnOnit');
    this.timerSubscription = interval(1000).subscribe(value => {
      this.seconds = value;
    })
  }
  /*
    Onchanges se ejecuta solo cuando tenemos enlazados un @Input()
    ya que este se encarga de monitorear los cambios.
    *ver ejemplo en show-name.ts
  */
  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges')
  }

  /*
    ngDoCheck, ngAfterContentChecked y ngAfterViewChecked
    se ejecutan para saber que cambio y que tiene que renderizar
    nuevamente.
    ngDoCheck se ejecuta antes de los cambios.
    ngAfterViewChecked se ejecuta despues de los cambios y se verifica
  */
  ngDoCheck(): void {
    console.log('DoCheck')
  }

  ngAfterContentChecked(): void {
    console.log('AfterContentChecked')
  }

  ngAfterViewChecked(): void {
    console.log('AfterViewChecked')
  }

  ngAfterContentInit(): void {
    console.log('AfterContentInit')
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit')
  }

  /*
    Dentro de on Ondestroy podemos ejecutar funciones que eliminen
    procesos que estan corriendo o terminar subscripciones que consumen
    memoria. ya que este metodo se ejecuta cuando se destruye el componente
    hacemos esto para no tener posibles fugaz de memoria.
  */
  ngOnDestroy(): void {
    console.log('OnDestroy')
    this.timerSubscription.unsubscribe();
  }

  guardar() {
    console.log('Guardado');
  }
}
