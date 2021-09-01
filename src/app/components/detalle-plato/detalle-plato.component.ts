import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlatosService } from 'src/app/services/platos.service';
import { Plato } from '../../models/Plato';

@Component({
  selector: 'app-detalle-plato',
  templateUrl: './detalle-plato.component.html',
  styleUrls: ['./detalle-plato.component.css']
})
export class DetallePlatoComponent implements OnInit {

  plato:any;
  
  constructor(private activatedRoute: ActivatedRoute,private platoService: PlatosService) { 

    
    this.activatedRoute.params.subscribe(params => {
      console.log(params['id'])
      this.plato = this.platoService.getPlatoId(params['id']);
      
      


    })




  }

  ngOnInit(): void {
  }



}
