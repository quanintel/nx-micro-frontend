import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import {AraNotificationComponent} from "ara-notification/Component";

bootstrapApplication(AraNotificationComponent, appConfig).catch((err) =>
  console.error(err)
);
