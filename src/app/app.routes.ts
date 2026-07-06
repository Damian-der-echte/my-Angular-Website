import { Routes } from '@angular/router';
import { componentsRoutes } from '../components/components.routes';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  ...componentsRoutes,
  { path: '**', redirectTo: 'home' },
];
