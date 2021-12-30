import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DatatableComponent } from '../components/datatable/datatable.component';
import { MaterialModule } from './material.module';


const COMPONENT = [
  DatatableComponent
]
@NgModule({
  declarations: COMPONENT,
  imports:[
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: COMPONENT
})
export class SharedModule { }
