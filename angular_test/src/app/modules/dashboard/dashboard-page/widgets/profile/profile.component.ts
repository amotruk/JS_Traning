import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserStore} from '../../../../../core/storage/user-store';
import {Validators} from '@angular/forms';
import {User} from '../../../../../core/auth/entity/user';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  user: User;
  userStoreSubscription: Subscription;

  constructor(private userStore: UserStore) {
  }

  ngOnInit() {
    this.userStoreSubscription = this.userStore.$get()
      .subscribe((user: User) => {
        this.user = user;
      });
  }

  ngOnDestroy(): void {
    this.userStoreSubscription.unsubscribe();
  }

}
