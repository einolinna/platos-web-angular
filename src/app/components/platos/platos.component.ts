import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plato } from 'src/app/models/Plato';
import { PlatosService } from 'src/app/services/platos.service';

@Component({
  selector: 'app-platos',
  templateUrl: './platos.component.html',
  styleUrls: ['./platos.component.css'],
})
export class PlatosComponent implements OnInit {
  constructor(private platoService: PlatosService, private router: Router) {}

  platosArr: any[] = [];

  ngOnInit(): void {
    this.platosArr = this.platoService.getPlatos();
  }

  public verPlato(idx: string): any {
    this.router.navigate(['/detallePlato', idx]);
  }
}
