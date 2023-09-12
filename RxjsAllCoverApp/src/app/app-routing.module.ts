import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromisesComponent } from './promises/promises.component';
import { ObservableComponent } from './observable/observable.component';
import { AllComponent } from './observable/all/all.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { ToarrayComponent } from './observable/toarray/toarray.component';
import { CustomComponent } from './observable/custom/custom.component';
import { MapComponent } from './observable/map/map.component';
import { PluckComponent } from './observable/pluck/pluck.component';
import { FilterComponent } from './observable/filter/filter.component';
import { TapComponent } from './observable/tap/tap.component';
import { TakeComponent } from './observable/take/take.component';
import { RetryComponent } from './observable/retry/retry.component';
import { DebounceTimeComponent } from './observable/debounce-time/debounce-time.component';
import { SubjectComponent } from './observable/subject/subject.component';

const routes: Routes = [
  { path: 'promise', component: PromisesComponent },
  {
    path: 'observable',
    component: ObservableComponent,
    children: [
      { path: '', component: AllComponent },
      { path: 'fromevent', component: FromEventComponent },
      { path: 'interval', component: IntervalComponent },
      { path: 'of-from', component: OfFromComponent },
      { path: 'to-array', component: ToarrayComponent },
      { path: 'custom-observable', component: CustomComponent },
      { path: 'map', component: MapComponent },
      { path: 'pluck', component: PluckComponent },
      { path: 'filter', component: FilterComponent },
      { path: 'tap', component: TapComponent },
      { path: 'take', component: TakeComponent },
      { path: 'retry', component: RetryComponent },
      { path: 'debouncetime', component: DebounceTimeComponent },
      { path: 'subject', component: SubjectComponent },
    ],
  },
  { path: '**', redirectTo: 'promise' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
