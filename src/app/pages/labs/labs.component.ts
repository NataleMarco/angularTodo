import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css',
})
export class LabsComponent {
  welcome = 'Hola!';
  tasks = signal([
    'Descargar Angular/CLI',
    'Iniciar el proyecto con NPM',
    'Empezar a escribir como tontito',
    'Crear componentes',
    'Crear paginas',
    'Seguir escribiendo como tontito',
  ]);

  disabled = 'True';

  colorCtrl = new FormControl();

  nameCtrl = new FormControl('hola', {
    nonNullable: true,
    validators: [Validators.required, Validators.minLength(3)],
  });

  name = signal('Marcos');

  persona = signal({
    name: 'valentina',
    age: 21,
    avatar: 'https://w3schools.com/howto/img_avatar.png',
  });

  clickHandler() {
    alert('Hola');
  }
  changeHandler(event: Event) {
    console.log(event);
  }

  newNombreCtrl = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required],
  });

  nameChanger(){
    const newValue = this.newNombreCtrl.value.trim()
    this.name.set(newValue)
  }


  keydownHandler(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);
  }
}
