import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginComponent, DashboardComponent],
  exports: [LoginComponent, DashboardComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    AngularFireDatabaseModule,
    FormsModule
  ]
})
export class CoreModule { }
