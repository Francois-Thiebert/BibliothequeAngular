import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(private router: Router) {}

  logout() {
    sessionStorage.clear();
    this.router.navigateByUrl('/home');
  }

  get logged(): boolean {
    return sessionStorage.getItem('token') ? true : false;
  }


}
