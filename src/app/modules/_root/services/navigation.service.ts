import { Injectable } from "@angular/core";
import { NavigationLink } from "../../../model/navigationLink";

@Injectable()
export class NavigationService {
  links = [
    {
      label: 'Home',
      path: 'home',
      icon: 'home'
    },
    {
      label: 'Equipment', 
      path: 'items',
      icon: 'photo_camera'
    },
    {
      label: 'Warenkorb',
      path: 'warenkorb',
      icon: 'shopping_cart'
    },
    {
      label: 'Login', 
      path: 'login',
      icon: 'perm_identity'
    },
  ]
  getNavigationLinks (): NavigationLink[] {
    let navigationLinks: NavigationLink[] = [];
    this.links.map(_link => {
      navigationLinks.push(new NavigationLink(_link.label, _link.path, _link.icon));
    });
    return navigationLinks;
  }
}