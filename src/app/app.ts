import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Admin } from './components/admin/admin';
import { User } from './components/user/user';
import { DataBinding } from './components/data-binding/data-binding';
import { Signals } from './components/signals/signals';
import { ControlFLow } from './components/control-flow/control-flow';
import { Attributes } from './components/attributes/attributes';
import { EpisodeThreeService } from './components/rxjs-episode-three/episode-three-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, Admin, User, DataBinding, Signals, ControlFLow, Attributes],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Angular-project-1');
  episodeThreeService = inject(EpisodeThreeService)
  onRoleChange(event: any) {
    debugger; 
    this.episodeThreeService.roleBehaviour$.next(event.target.value)
    this.episodeThreeService.roleSub$.next(event.target.value)
  }
}
