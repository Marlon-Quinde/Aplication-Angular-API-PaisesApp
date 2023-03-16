import { Component, Input, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent implements OnInit {

  constructor(private paisService:PaisService) { }

  termino:string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  @Input() categoria: string = 'Capital';

  ngOnInit(): void {
  }

  Buscar(termino: string) {
    this.hayError = false;

    this.termino = termino;

    this.paisService.buscarCapital(this.termino)
    .subscribe((paises) => {
      this.paises = paises;
    }, (err) =>{
      this.hayError=true;
      this.paises=[];
    });

  }

  sugerencias(termino: string) {
    this.hayError = false;
    //TODO: crear sugerencias
  }
}
