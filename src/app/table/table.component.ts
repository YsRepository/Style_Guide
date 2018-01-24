import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  title = 'Data Table Components';
  ExampleList = [
    {cpi: '111', name: 'name one' ,po: '1111', date: '01/01/2018', description: 'Lorem Ipsum es simplemente el texto de relleno'},
    {cpi: '222', name: 'name two', po: '1112', date: '02/01/2018', description: 'Lorem Ipsum es simplemente el texto de relleno'},
    {cpi: '333', name: 'name tree', po: '1113', date: '03/01/2018', description: 'Lorem Ipsum es simplemente el texto de relleno'},
    {cpi: '444', name: 'name four', po: '1114', date: '04/01/2018', description: 'Lorem Ipsum es simplemente el texto de relleno'},
    {cpi: '555', name: 'name five', po: '11115', date: '05/01/2018', description: 'Lorem Ipsum es simplemente el texto de relleno'},
  ];

  constructor() { }

  ngOnInit() {
  }

}


