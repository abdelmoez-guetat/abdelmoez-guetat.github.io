import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: AboutComponent } // Default route for the admin module
];


@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
     RouterModule.forChild(routes)
  ]
})
export class AboutModule { }
