import { Routes } from '@angular/router';

export const componentsRoutes: Routes = [

  {
    path: 'home',
    loadComponent: () =>
      import('./home/home').then((m) => m.Home),
  },
  {
    path: 'components/wirtschaftsinformatiker',
    loadComponent: () => import('./wirtschaftsinformatiker/wirtschaftsinformatiker').then((m) => m.Wirtschaftsinformatiker),
  },
  {
    path: 'components/faehigkeiten',
    loadComponent: () => import ('./faehigkeiten/faehigkeiten').then((m) => m.Faehigkeiten),
  },
  {
    path: 'components/benefits',
    loadComponent: () => import ('./benefits/benefits').then((m) => m.Benefits),
  },
  {
    path: 'components/kontakt',
    loadComponent: () => import ('./kontakt/kontakt').then((m) => m.Kontakt),
  },
];
