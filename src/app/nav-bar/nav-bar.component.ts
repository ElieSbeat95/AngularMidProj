import { Component } from '@angular/core';
import { ServiceStoreService } from '../service-store.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(public serviceStore: ServiceStoreService) {}
}
