import { Injectable } from "@angular/core";
import { NavigationLink } from "../../../model/navigationLink";

@Injectable()
export class NavigationService {
  links = [
    {
      label: 'Dashboard', 
      path: 'dashboard',
      icon: 'home'
    },
    {
      label: 'Items', 
      path: 'items',
      icon: 'format_list_bulleted'
    },
    {
      label: 'Login', 
      path: 'login',
      icon: 'wc'
    }
  ]
  getNavigationLinks (): NavigationLink[] {
    let navigationLinks: NavigationLink[] = [];
    this.links.map(_link => {
      navigationLinks.push(new NavigationLink(_link.label, _link.path, _link.icon));
    });
    return navigationLinks;
  }
}