import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export type AuthData = {
  username: string;
  password: string;
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authSubject = new BehaviorSubject<AuthData | null>(null);

  public auth$: Observable<AuthData | null> = this.authSubject.asObservable();
  public isAuthenticated$: Observable<boolean>;
  public isLoggedOut$: Observable<boolean>;

  constructor() {
    this.isAuthenticated$ = this.auth$.pipe(map((userAuth) => !!userAuth));
    this.isLoggedOut$ = this.auth$.pipe(map((userAuth) => !userAuth));
  }

  public login(authData: AuthData) {
    setTimeout(() => this.authSubject.next(authData), 2000);
  }

  public async logout() {
    this.authSubject.next(null);
  }
}
