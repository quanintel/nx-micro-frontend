import {withModuleFederation} from '@nx/angular/module-federation';
import config from './module-federation.config';

export default withModuleFederation(config);

//Override config ở đây để rõ ràng.
// export default withModuleFederation({
//   ...config,
//   remotes: [
//     ['ara-notification', 'http://localhost:4201/remoteEntry.mjs'],
//     ['ara-menu', 'http://localhost:4202/remoteEntry.mjs']
//   ]
// });
