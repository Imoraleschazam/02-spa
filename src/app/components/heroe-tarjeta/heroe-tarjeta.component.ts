import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
// import { ActivatedRoute } from '@angular/router';
// import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {

@Input() heroe:any = {};
@Input() index:number;

@Output() heroeSeleccionado: EventEmitter<number>;
// @Input() termino:string;
// @Input() heroes:any[] = []


  constructor(private router: Router) {
    this.heroeSeleccionado = new EventEmitter();
}
              // private activatedRoute:ActivatedRoute,
              // private _heroesService: HeroesService ) { }

ngOnInit() {
}
// this.activatedRoute.params.subscribe( params => {
//   this.termino =params['termino'];
//   this.heroes = this._heroesService.buscarHeroes( params['termino'] );
//   console.log( this.heroes );
//   });


    verHeroe() {
    // console.log( this.index );
      this.router.navigate( ['/heroe', this.index ] );
    // this.heroeSeleccionado.emit( this.index );
    }
}
