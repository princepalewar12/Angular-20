import { Routes } from '@angular/router';
import { ControlFLow } from './components/control-flow/control-flow';
import { DataBinding } from './components/data-binding/data-binding';
import { Admin } from './components/admin/admin';
import { Signals } from './components/signals/signals';
import { User } from './components/user/user';
import { NotFound } from './components/not-found/not-found';
import { Photos } from './components/photos/photos';
import { RxjsBasics } from './components/rxjs-basics/rxjs-basics';
import { RxjsEpisodeTwo } from './components/rxjs-episode-two/rxjs-episode-two';
import { RxjsEpisodeThree } from './components/rxjs-episode-three/rxjs-episode-three';
import { RxjsEpisodeFour } from './components/rxjs-episode-four/rxjs-episode-four';
import { RxjsEpisodeFive } from './components/rxjs-episode-five/rxjs-episode-five';

export const routes: Routes = [
  { path: '', redirectTo: 'databinding', pathMatch: 'full' },
  { path: 'controlflow', component: ControlFLow },
  { path: 'databinding', component: DataBinding },
  { path: 'admin', component: Admin },
  { path: 'signal', component: Signals },
  { path: 'API-call', component: Photos },
  { path: 'user', component: User },
  { path: 'rxjs', component: RxjsBasics },
  { path: 'episode-2', component: RxjsEpisodeTwo },
  { path: 'episode-3', component: RxjsEpisodeThree },
  { path: 'episode-4', component: RxjsEpisodeFour },
  { path: 'episode-4', component: RxjsEpisodeFour },
  { path: 'episode-5', component: RxjsEpisodeFive },
  { path: '**', component: NotFound },

];