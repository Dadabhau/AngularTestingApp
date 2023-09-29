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
import { ReplaySubjectComponent } from './observable/replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './observable/async-subject/async-subject.component';
import { ConcatComponent } from './observable/concat/concat.component';
import { MergeComponent } from './observable/merge/merge.component';
import { MergeMapComponent } from './observable/merge-map/merge-map.component';
import { ConcatMapComponent } from './observable/concat-map/concat-map.component';
import { SwitchMapComponent } from './observable/switch-map/switch-map.component';
import { ExhaustMapComponent } from './observable/exhaust-map/exhaust-map.component';
import { ShareReplayComponent } from './observable/share-replay/share-replay.component';
import { NgrxComponent } from './ngrx/ngrx/ngrx.component';
import { ProductsComponent } from './ngrx/products/products.component';
import { UsersComponent } from './ngrx/users/users.component';

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
      { path: 'replay-subject', component: ReplaySubjectComponent },
      { path: 'async-subject', component: AsyncSubjectComponent },
      { path: 'concat', component: ConcatComponent },
      { path: 'merge', component: MergeComponent },
      { path: 'merge-map', component: MergeMapComponent },
      { path: 'concat-map', component: ConcatMapComponent },
      { path: 'switch-map', component: SwitchMapComponent },
      { path: 'exhaust-map', component: ExhaustMapComponent },
      { path: 'share-replay', component: ShareReplayComponent },
    ],
  },
  {
    path: 'ngrx',
    component: NgrxComponent,
    children: [
      { path: 'all-product', component: ProductsComponent },
      { path: 'all-users', component: UsersComponent },
    ],
  },
  { path: '**', redirectTo: 'promise' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
