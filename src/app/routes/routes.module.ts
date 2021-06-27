import {NgModule} from "@angular/core";
import {HeaderComponent} from './components/header/header.component';
import {SearchBarComponent} from './components/search-bar/search-bar.component';
import {SearchResultComponent} from './components/search-result/search-result.component';
import {RoutesRoutingModule} from "./routes-routing.module";
import {RoutesLayoutComponent} from './layouts/routes-layout/routes-layout.component';
import {MaterialModule} from "../shared/material/material.module";

@NgModule({
  imports: [
    RoutesRoutingModule,
    MaterialModule
  ],
  declarations: [
    HeaderComponent,
    SearchBarComponent,
    SearchResultComponent,
    RoutesLayoutComponent
  ],
  providers: [],
})
export class RoutesModule {
}
