import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlatosService } from '../../services/platos.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  platosBusqueda:any = []
  termino?:string;
  constructor(private platosService:PlatosService,
     private activatedRoute: ActivatedRoute,
     private router:Router) {

    


   }

  ngOnInit(): void {

    
    this.activatedRoute.params.subscribe(params => {

      this.termino = params['termino'];

      this.platosBusqueda = this.platosService.buscarPlatos(params['termino']);

    


    })
  }

 
  public verPlato(idx: string): any {
    this.router.navigate(['/detallePlato', idx]);
  }



}
