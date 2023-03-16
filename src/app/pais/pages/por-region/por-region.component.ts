import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
    button{
      margin-right: 5px;
    }
    `
  ]
})
export class PorRegionComponent implements OnInit {

  hayError:boolean = false;
  paises:Country[] = [];
  regiones:String[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva:String = '';

  constructor(private paisService:PaisService) { }

  getClaseCSS(region: string): string{
    return (region === this.regionActiva) ? 'btn btn-primary ' : 'btn btn-outline-primary'
  }

  activarRegion(region:String){

    if(region === this.regionActiva){return;}
    this.regionActiva = region;
    this.paises = [];
    this.paisService.buscarRegion(this.regionActiva).subscribe((paises) =>{
      this.paises = paises;
    },(err)=>{
      this.hayError=true;
    });
  }
  // Buscar(termino:string){
  //   this.termino = termino;
  //   this.hayError = false;
  // }

  ngOnInit(): void {
  }

}
