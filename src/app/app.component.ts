import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TestComponent } from './components/test/test.component';
import { TableComponent } from './components/table/table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, TestComponent, TableComponent],
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
}
