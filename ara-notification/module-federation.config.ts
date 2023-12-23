import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'ara-notification',
  exposes: {
    './Routes': 'ara-notification/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
