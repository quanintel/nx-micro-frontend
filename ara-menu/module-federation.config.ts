import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'ara-menu',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
