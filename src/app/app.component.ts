import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  favoriteColorControl = new FormControl('color Reactive Forms');
  favoriteColor = 'color Template Driven ';
  nome: string;
  senha: string;
  senhaConfirmacao: string;    
}
