import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { faBoxOpen, faUser, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public openBoxIcon = faBoxOpen;
  public userIcon = faUser;
  public selectedRoute?: string;

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.selectedRoute = event.url.split('/')[1];
      }
    });
    this.userService.userLogged$.subscribe((isLogged:boolean) => {
      this.userIcon = isLogged ? faUserCheck : faUser;
    });
  }

  public login() {
    if (this.userService.isLoggedIn()) {
      this.router.navigate(['/my-account']);
    } else {
      this.router.navigate(['/login']);
    }
  }

}
