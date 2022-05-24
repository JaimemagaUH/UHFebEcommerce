import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/core/services/user/models/user.models';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {

  public user?: IUser;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    const userId = this.userService.getUserId();
    this.userService.getUserProfile(userId).subscribe((profile) => {
      this.user = profile.result;
    })
  }

}
