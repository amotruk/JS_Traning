import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChildren,
  ViewContainerRef
} from '@angular/core';
import {UserStore} from '../../../core/storage/user-store';
import {Subscription} from 'rxjs';
import {User} from '../../../core/auth/entity/user';
import {ProfileComponent} from './widgets/profile/profile.component';
import {SkillsComponent} from './widgets/skills/skills.component';
import {OtherComponent} from './widgets/other/other.component';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy, AfterViewChecked {
  widgetsConfig: any[];
  widgetsConfigDefault: any[] = [
    {name: 'Profile widget', type: 'profile', shown: true},
    {name: 'Skills widget', type: 'skills', shown: true},
    {name: 'Other widget1', type: 'other', shown: true},
    {name: 'Other widget2', type: 'other', shown: true},
    {name: 'Other widget3', type: 'other', shown: true},
    {name: 'Other widget4', type: 'other', shown: true}
  ];
  widgets: any[];
  user: User;
  userStoreSubscription: Subscription;
  @ViewChildren('widget', {read: ViewContainerRef}) public widgetTargets: QueryList<ViewContainerRef>;

  constructor(private userStore: UserStore,
              private componentFactoryResolver: ComponentFactoryResolver,
              private changeDetector: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.userStoreSubscription = this.userStore.$get()
      .subscribe((user: User) => {
        this.user = user;
        this.widgetsConfig = JSON.parse(localStorage.getItem('widgetsConfig')) || this.widgetsConfigDefault;
        this.reloadWidgets();
      });
  }

  ngOnDestroy(): void {
    this.userStoreSubscription.unsubscribe();
  }

  ngAfterViewChecked() {
    this.createWidgetComponents();
  }

  createWidgetComponents() {
    for (let i = 0; i < this.widgetTargets.toArray().length; i++) {
      const target = this.widgetTargets.toArray()[i];
      const component = this.widgets[i];
      target.clear();
      if (component) {
        const widgetComponent = this.componentFactoryResolver.resolveComponentFactory(component);
        target.createComponent(widgetComponent);
      }
    }
    this.changeDetector.detectChanges();
  }

  reloadWidgets() {
    this.widgets = [];
    this.widgetsConfig.forEach(widget => {
      if (widget.shown && widget.type === 'profile') {
        this.widgets.push(ProfileComponent);
      } else if (widget.shown && widget.type === 'skills') {
        this.widgets.push(SkillsComponent);
      } else if (widget.shown && widget.type === 'other') {
        this.widgets.push(OtherComponent);
      }
    });
    localStorage.setItem('widgetsConfig', JSON.stringify(this.widgetsConfig));
  }
}
