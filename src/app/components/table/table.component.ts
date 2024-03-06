import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Person } from '../../model/person';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, MatTableModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  persons : Person[] = [

    {name: "Leonardo", surname: "Stefanelli", age: 18},
    {name: "Federico", surname: "Ciaschi", age: 18},
    {name: "J", surname: "J", age: 18},
    {name: "Samuele", surname: "Rosselli", age: 18}
  ];

  p : Person = {name: "", surname: "", age: 0};

  add_button_text = "Aggiungi";
  edit_index = -1;

  add_person = () => {

    this.persons.push({name: this.p.name, surname: this.p.surname, age: this.p.age});
    this.p = {name: "", surname: "", age: 0};
  }

  edit_person = () => {

    this.add_button_text = "Aggiungi";
    this.edit_index = -1;
    this.p = {name: "", surname: "", age: 0};
  }

  edit = (index : number) => {

    this.add_button_text = "Fine Modifica";
    this.edit_index = index;
    this.p = this.persons[index];
  }

  delete = (index : number) => {
    this.persons.splice(index, 1);
  }
}
