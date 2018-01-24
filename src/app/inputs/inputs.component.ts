import { Component, OnInit } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {
  title = 'Inputs Components';
  formulario = false;

  state = 'inactive';
  constructor() { }

  ngOnInit() {
  }
  showFilters() {
    this.state = (this.state === 'inactive' ? 'active' : 'inactive');
    this.formulario = !this.formulario;

  }

}
