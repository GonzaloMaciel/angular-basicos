import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Superman', 'Spiderman', 'Batman', 'Hulk'];
  heroeBorrado: string = ''; 
  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';

  }
}

