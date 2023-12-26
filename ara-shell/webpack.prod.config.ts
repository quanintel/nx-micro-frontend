import {withModuleFederation} from '@nx/angular/module-federation';
import config from './module-federation.config';

export default withModuleFederation({
  ...config,
  /*
   * Remote overrides for production.
   * Each entry is a pair of a unique name and the URL where it is deployed.
   *
   * e.g.
   * remotes: [
   *   ['app1', 'https://app1.example.com'],
   *   ['app2', 'https://app2.example.com'],
   * ]
   */
  remotes: [
    ['ara-menu', 'https://menu.quanka.duckdns.org/remoteEntry.js'],
    ['ara-notification', 'https://noti.quanka.duckdns.org/remoteEntry.mjs'],
  ]
});
