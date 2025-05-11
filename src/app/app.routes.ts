import { Routes } from '@angular/router';
import { PromiseComponent } from './promise/promise.component';
import { ObservablesComponent } from './observables/observables.component';
import { ListComponent } from './observables/list/list.component';
import { FromEventComponent } from './observables/from-event/from-event.component';
import { IntervalComponent } from './observables/interval/interval.component';
import { OfFromComponent } from './observables/of-from/of-from.component';

export const routes: Routes = [
  { path: '', redirectTo: 'promise', pathMatch: 'full' },
  { path: 'promise', component: PromiseComponent },
  {
    path: 'observables',
    component: ObservablesComponent,
    children: [
      { path: '', component: ListComponent },
      { path: 'fromEvent', component: FromEventComponent },
      { path: 'interval', component: IntervalComponent },
      { path: 'ofFrom', component: OfFromComponent }
    ],
  },
];
