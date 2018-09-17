import { Injectable } from '@angular/core';

import { Store } from './store';
import { User } from '../auth/entity/user';

@Injectable()
export class UserStore extends Store<User> {
  constructor() {
    super(new User());
  }

  hasUser(): boolean {
    return !!this.get().token;
  }
}
