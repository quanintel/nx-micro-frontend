import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AraMenuComponent, AraMenuOption} from "../ara-menu/ara-menu.component";
import {AraNotificationComponent} from "ara-notification/Component"

@Component({
  selector: 'app-wrap-root',
  standalone: true,
  imports: [CommonModule, AraMenuComponent, AraNotificationComponent],
  templateUrl: './wrap-root.component.html',
  styleUrl: './wrap-root.component.scss',
})
export class WrapRootComponent {
  optionAraMenu: AraMenuOption = {
    loadRemote: () => import('ara-menu/Module'),
    selector: 'ara-menu'
  }
}
