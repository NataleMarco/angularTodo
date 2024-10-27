import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todoapp';
  welcome = 'Hola!';
  tasks = [
    'Descargar Angular/CLI',
    'Iniciar el proyecto con NPM',
    'Empezar a escribir como tontito',
    'Crear componentes',
    'Crear paginas',
    'Seguir escribiendo como tontito'
  ]


}
