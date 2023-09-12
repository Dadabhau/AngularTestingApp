import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './inculdes/header/header.component';
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
import { Comp1Component } from './observable/subcomponent/comp1/comp1.component';
import { Comp2Component } from './observable/subcomponent/comp2/comp2.component';
import { Comp3Component } from './observable/subcomponent/comp3/comp3.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PromisesComponent,
    ObservableComponent,
    AllComponent,
    FromEventComponent,
    IntervalComponent,
    OfFromComponent,
    ToarrayComponent,
    CustomComponent,
    MapComponent,
    PluckComponent,
    FilterComponent,
    TapComponent,
    TakeComponent,
    RetryComponent,
    DebounceTimeComponent,
    SubjectComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
