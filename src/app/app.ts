import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Admin } from './components/admin/admin';
import { User } from './components/user/user';
import { DataBinding } from './components/data-binding/data-binding';
import { Signals } from './components/signals/signals';
import { ControlFLow } from './components/control-flow/control-flow';
import { Attributes } from './components/attributes/attributes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,RouterLinkActive,Admin,User,DataBinding,Signals,ControlFLow,Attributes],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Angular-project-1');
}
