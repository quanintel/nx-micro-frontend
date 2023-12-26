import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';

const imports: any[] = [RouterModule]

@Component({
  standalone: true,
  imports: imports,
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
}
