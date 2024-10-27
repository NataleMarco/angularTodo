import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Task} from '../../../models/task.model';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  tasks = signal<Task[]>([]);
  completedTasks = signal<Task[]>([])

  updateTask(index: number){
    this.tasks.update((tasks) => {
      return tasks.map((task, position) => {
        if(position === index) {
          return {
          ...task,
            completed: !task.completed
          }
        }
        return task;
      })
    })
  }

  toggleCompletion(index: number){
    const toggledTask = this.tasks()[index];
    this.completedTasks.update((completedTasks) => [...completedTasks,toggledTask]);
    this.deleteTask(index);
  }

  test(index: number){
    const completedTasks = this.tasks().filter(task => task.completed)

    const task = this.tasks()[index]
    if (task.completed){
      task.completed = false;
    }else{
      task.completed = true;
    }
    task.completed = true;
    this.tasks.update(tasks => {
    tasks[index] = task;
    return tasks;
    })
  }



  changeHandler(event: Event){
    const input = event.target as HTMLInputElement;
    const newTask = input.value;
    this.addTask(newTask);
  }

  addTask(title: string){
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    this.tasks.update((tasks) => [...tasks, newTask]);
  }

  deleteTask(index: number){
    this.tasks.update((tasks) => tasks.filter((task,position) => position !== index));
  }

}
