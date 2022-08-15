import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Superman', 'Batman', 'Thor'];
  heroe: string = '';

  borrarHeroe(): void {
    this.heroe = this.heroes.pop() || '';
  }

}
