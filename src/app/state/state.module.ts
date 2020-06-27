import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateComponent } from './state/state.component';
import { StateRouteModule } from './state-route.module';



@NgModule({
  declarations: [StateComponent],
  imports: [
    CommonModule,
    StateRouteModule
  ]
})
export class StateModule { }
