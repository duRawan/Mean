import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChicagoComponent } from './chicago/chicago.component';
import { DcComponent } from './dc/dc.component';
import { DallasComponent } from './dallas/dallas.component';
import { BurbankComponent} from './burbank/burbank.component';
import { SanJoseComponent } from './san-jose/san-jose.component';
import { SeattleComponent } from './seattle/seattle.component';
// import the components and declar the paths !
const routes: Routes = [
  {
    path: 'dallas',
    component: DallasComponent,
  },
  {
    path: 'seattle',
    component: SeattleComponent
  },
  {
    path: 'sanjose',
    component: SanJoseComponent
  },
  {
    path: 'burbank',
    component: BurbankComponent
  },
  {
    path: 'dc',
    component: DcComponent
  },
  {
    path: 'chicago',
    component: ChicagoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
