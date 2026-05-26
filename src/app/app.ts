import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Admin } from './components/admin/admin';
import { User } from './components/user/user';
import { DataBinding } from './components/data-binding/data-binding';
import { Signals } from './components/signals/signals';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Admin,User,DataBinding,Signals],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Angular-project-1');
}
