import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'jinesh', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'jinesh', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'jinesh', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'jinesh', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'jinesh', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'jinesh', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'jinesh', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'jinesh', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'jinesh', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'jinesh', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent{

  constructor() { }
  
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
