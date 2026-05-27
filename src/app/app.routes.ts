import { Routes } from '@angular/router';
import { ControlFLow } from './components/control-flow/control-flow';
import { DataBinding } from './components/data-binding/data-binding';
import { Admin } from './components/admin/admin';
import { Signals } from './components/signals/signals';
import { User } from './components/user/user';
import { NotFound } from './components/not-found/not-found';

export const routes: Routes = [
  { path: '', redirectTo: 'databinding', pathMatch: 'full' },
  { path: 'controlflow', component: ControlFLow },
  { path: 'databinding', component: DataBinding },
  { path: 'admin', component: Admin },
  { path: 'signal', component: Signals },
  {path: '**', component: NotFound}
];
// Time 2:14 hr