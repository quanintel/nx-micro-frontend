import {Route} from '@angular/router';
import {AraMenuComponent, AraMenuOption} from "./components/ara-menu/ara-menu.component";
import {WrapRootComponent} from "./components/wrap-root/wrap-root.component";

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
    component: WrapRootComponent
  },
];
