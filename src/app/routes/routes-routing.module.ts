import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RoutesLayoutComponent} from "./layouts/routes-layout/routes-layout.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: RoutesLayoutComponent
  },
  {
    path: 'home-2',
    component: RoutesLayoutComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [],
  providers: [],
})
export class RoutesRoutingModule {}
