import { Routes } from '@angular/router';
import { PromiseComponent } from './promise/promise.component';
import { ObservablesComponent } from './observables/observables.component';
import { ListComponent } from './observables/list/list.component';
import { FromEventComponent } from './observables/from-event/from-event.component';
import { IntervalComponent } from './observables/interval/interval.component';
import { OfFromComponent } from './observables/of-from/of-from.component';
import { ToArrayComponent } from './observables/to-array/to-array.component';
import { CustomObservableComponent } from './observables/custom-observable/custom-observable.component';
import { MapComponent } from './observables/map/map.component';
import { PluckComponent } from './observables/pluck/pluck.component';
import { FilterComponent } from './observables/filter/filter.component';

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
      { path: 'ofFrom', component: OfFromComponent },
      { path: 'toArray', component: ToArrayComponent },
      { path: 'custom', component: CustomObservableComponent },
      { path: 'map', component: MapComponent },
      { path: 'pluck', component: PluckComponent},
      { path: 'filter', component: FilterComponent}
    ],
  },
];
