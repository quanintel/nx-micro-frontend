import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'ara-notification',
  exposes: {
    './Routes': 'ara-notification/src/app/remote-entry/entry.routes.ts',
    './Component': 'ara-notification/src/app/components/ara-notification/ara-notification.component.ts',
  },
};

export default config;
