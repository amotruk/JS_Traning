import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from '../../../../core/auth/entity/user';
import {UserStore} from '../../../../core/storage/user-store';
import {Subscription} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit, OnDestroy {
  form: FormGroup;
  user: User;
  userStoreSubscription: Subscription;

  constructor(private formBuilder: FormBuilder, private userStore: UserStore) {
  }

  ngOnInit() {
    this.userStoreSubscription = this.userStore.$get()
      .subscribe((user: User) => {
        this.user = user;
        this.form = this.formBuilder.group({
          login: [user.login, [Validators.required]],
          firstName: [user.firstName, [Validators.required]],
          lastName: [user.lastName, [Validators.required]],
          email: [user.email, [Validators.required]],
        });
      });
  }

  ngOnDestroy(): void {
    this.userStoreSubscription.unsubscribe();
  }

  submit(): void {
    const updatedUser = this.form.value as User;

    this.user.login = updatedUser.login;
    this.user.firstName = updatedUser.firstName;
    this.user.lastName = updatedUser.lastName;
    this.user.email = updatedUser.email;

    this.userStore.update(this.user);
  }
}
