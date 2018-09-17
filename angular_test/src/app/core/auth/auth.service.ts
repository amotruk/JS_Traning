import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { User } from './entity/user';
import { UserDto } from './entity/user.dto';
import { UserCredentials } from './entity/user-credentials';
import { UserStore } from '../storage/user-store';

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient,
    private userStore: UserStore
  ) {}

  login(creds: UserCredentials): Observable<User> {
    return this.http.get<UserDto>('/assets/mocks/user.json').pipe(
      map((response: UserDto) => new User(
        response.login,
        response.firstName,
        response.lastName,
        response.email,
        response.jobTitle,
        response.authToken
      )),
      tap((user: User) => this.userStore.update(user))
    );
  }
}
