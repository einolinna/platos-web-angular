import { Injectable } from '@angular/core';
import * as data from 'src/assets/datos/platos.json';
import { Plato } from '../models/Plato';

@Injectable({
  providedIn: 'root',
})
export class PlatosService {
  public platosFile: any = (data as any).default;

  constructor() {
    this.platosFile;
  }

  getPlatos(): any[] {
    return this.platosFile.platos;
  }

  getPlatoId(idx: string): any {
    for (let plato of this.platosFile.platos) {
      if (plato.id === idx) {
        return plato;
      }
    }
  }

  public buscarPlatos(termino: string): any[] {
    let platosArr: any[] = [];
    termino = termino.toLowerCase();
    for (let plato of this.platosFile.platos) {
      let nombre = plato.nombre.toLowerCase();
      if (nombre.indexOf(termino) >= 0) {
        platosArr.push(plato);
      }
    }
    return platosArr;
  }
}
