import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';

export interface  PeriodicElement {  
  Materia: string;
  position: number;
  profesor: string;
  Notatotal: number;
  Semestre: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    Materia: 'Hydrogen',
    profesor: 'jose cupello',
    Semestre: 1,
    Notatotal: 20,
  },
  {
    position: 2,
    Materia: 'Hydrogen',
    profesor: 'Gsus Silva',
    Semestre: 1,
    Notatotal: 20,
  },
  {
    position: 3,
    Materia: 'Hydrogen',
    profesor: 'Glennys teran',
    Semestre: 1,
    Notatotal: 20,
  },
];
@Component({
  selector: 'materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css'],
})
export class MateriasComponent {
  displayedColumns: string[] = [ 'Position ',
  'Materia',
  'Profesor ',
  'Semestre ',
  'Nota total '];
  dataSource = ELEMENT_DATA;
}