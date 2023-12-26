import {Component} from '@angular/core';
import {NzBadgeComponent} from "ng-zorro-antd/badge";
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-ara-notification',
  standalone: true,
  imports: [CommonModule, NzBadgeComponent],
  template: `
    <nz-badge [nzStandalone]="true" [nzCount]="10000" [nzOverflowCount]="999">
      <a class="head-example"></a>
    </nz-badge>
  `,
  styles: [
    `
      nz-badge {
        margin-right: 20px;
      }

      .head-example {
        width: 42px;
        height: 42px;
        border-radius: 4px;
        background: #eee;
        display: inline-block;
        vertical-align: middle;
      }
    `
  ],
})
export class AraNotificationComponent {
}
