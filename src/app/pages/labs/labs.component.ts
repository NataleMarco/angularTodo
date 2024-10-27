import { Component, signal } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'Hola!';
  tasks = signal([
    'Descargar Angular/CLI',
    'Iniciar el proyecto con NPM',
    'Empezar a escribir como tontito',
    'Crear componentes',
    'Crear paginas',
    'Seguir escribiendo como tontito'
  ]);

  disabled= 'True';

  name = signal('Marcos')
  person = {
    name: 'Marcos',
    age: 21,
    avatar: 'https://w3schools.com/howto/img_avatar.png'
  }
  clickHandler() {
    alert('Hola')
  }
  changeHandler(event: Event){
    console.log(event)

  }
  keydownHandler(event: KeyboardEvent){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);
  }
}
