import {NgModule} from "@angular/core";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {FlexLayoutModule} from "@angular/flex-layout";
import {RouterModule} from "@angular/router";
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

const sharedModules = [FlexLayoutModule, RouterModule, FormsModule, ReactiveFormsModule]

const modules = [MatToolbarModule, MatIconModule, MatButtonModule, MatInputModule]

@NgModule({
  imports: [...modules, ...sharedModules],
  exports: [...modules, ...sharedModules]
})
export class MaterialModule {
}
