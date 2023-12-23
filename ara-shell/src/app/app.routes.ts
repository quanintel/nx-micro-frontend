import {NxWelcomeComponent} from './nx-welcome.component';
import {Route} from '@angular/router';
import {AraMenuComponent, AraMenuOption} from "./ara-menu/ara-menu.component";

export const appRoutes: Route[] = [
  {
    path: 'ara-notification',
    loadChildren: () =>
      import('ara-notification/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'ara-menu',
    component: AraMenuComponent,
    data: {
      loadRemote: () => import('ara-menu/Module'),
      selector: 'ara-menu'
    } as AraMenuOption
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
