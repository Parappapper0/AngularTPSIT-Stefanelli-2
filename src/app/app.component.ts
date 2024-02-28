import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Person } from './model/person'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'AngularTPSIT-Stefanelli-2';
  color = '#000000';
  bg_color = '#FFFFFF';
  
  reset_title = () => this.title = "AngularTPSIT-Stefanelli-2";
  reset_color = () => this.color = "#000000";
  reset_bg_color = () => this.bg_color = "#FFFFFF";

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
