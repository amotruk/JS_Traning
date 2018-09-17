import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardPageComponent} from './dashboard-page/dashboard-page.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {ProfileComponent} from './dashboard-page/widgets/profile/profile.component';
import {SkillsComponent} from './dashboard-page/widgets/skills/skills.component';
import {ProfilePageComponent} from './dashboard-page/profile-page/profile-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { OtherComponent } from './dashboard-page/widgets/other/other.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardPageComponent,
    ProfileComponent,
    SkillsComponent,
    ProfilePageComponent,
    OtherComponent
  ],
  entryComponents: [
    ProfileComponent,
    SkillsComponent,
    OtherComponent
  ]
})
export class DashboardModule {
}
