import { Component, OnInit } from '@angular/core';
import { NavigationLink } from '../../../../model/navigationLink';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  navigationLinks: NavigationLink[];

  constructor(private NavigationService: NavigationService) {}

  ngOnInit() {
    this.navigationLinks = this.NavigationService.getNavigationLinks();
  }

}
