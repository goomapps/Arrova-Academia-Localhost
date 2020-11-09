import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {
  @Output('search') searchEmitter = new EventEmitter<string>();
  constructor() { }
  search = new FormControl('');
  ngOnInit(): void {
    this.search.valueChanges.pipe(debounceTime(300)).subscribe(value => this.searchEmitter.emit(value));

    const tags = [
      "noticias",
      "estudia",
      /*"valenciano",
      "titulaciones",
      "accesos",
      "refuerzo",
      "profesional",*/
      "cursos",
      "contacto",
      "nosotros"
    ]
  }
}
