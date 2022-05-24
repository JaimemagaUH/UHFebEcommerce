import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, ReplaySubject, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser, IUserSignInResponse, IUserSignUpResponse } from './models/user.models';

const ACCESS_TOKEN = 'access_token';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public userLogged$: ReplaySubject<boolean> = new ReplaySubject();

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {
    if (this.isLoggedIn()) {
      this.userLogged$.next(true);
    }
  }

  public login(user: IUser): Observable<IUserSignInResponse> {
    return this.httpClient.post<IUserSignInResponse>(`${environment.authUrl}/signin`, user).pipe(
      tap((res: IUserSignInResponse) => {
        const user = JSON.stringify({ token: res.token, id: res._id });
        localStorage.setItem(ACCESS_TOKEN, user);
        this.userLogged$.next(true);
        this.router.navigate(['']);
      })
    );
  }

  public register(user: IUser): Observable<IUserSignUpResponse> {
    return this.httpClient.post<IUserSignUpResponse>(`${environment.authUrl}/register-user`, user);
  }

  public logout() {
    // Remove from localStorage token
    let removeToken = localStorage.removeItem(ACCESS_TOKEN);
    this.userLogged$.next(false);
    if (removeToken === null) {
      this.router.navigate(['']);
    }
  }

  public isLoggedIn(): boolean {
    // Mirar en localStorage si token activo
    let authToken = localStorage.getItem(ACCESS_TOKEN);
    return authToken !== null;
  }

  public getToken() {
    let authToken = localStorage.getItem(ACCESS_TOKEN);
    return authToken ? JSON.parse(authToken)?.token : null;
  }

  public getUserId() {
    let authToken = localStorage.getItem(ACCESS_TOKEN);
    return authToken ? JSON.parse(authToken)?.id : null;
  }

  public getUserProfile(id: string): Observable<IUserSignUpResponse> {
    return this.httpClient.get<IUserSignUpResponse>(`${environment.authUrl}/user-profile/${id}`);
  }

}
