import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule, MatDialogConfig, MAT_DIALOG_DEFAULT_OPTIONS, MAT_DIALOG_SCROLL_STRATEGY } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarConfig } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule, MAT_MOMENT_DATE_ADAPTER_OPTIONS, MatMomentDateAdapterOptions } from '@angular/material-moment-adapter'
import { MatDateFormats, MAT_DATE_FORMATS } from '@angular/material/core';

const MAT_DIALOG_GLOBAL_CONFIG: MatDialogConfig = {
  width: '700px',
  maxHeight: '1127px',
  disableClose: true,
  hasBackdrop: true,
}

const MAT_DATE_ADAPTER_GLOBAL_CONFIG: MatMomentDateAdapterOptions = {
  useUtc: true,
  strict: true
}

const MAT_DATEPICKER_GLOBAL_CONFIG: MatDateFormats = {
  parse: {
    dateInput:  'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  }
}

const MAT_SNACK_BAR_GLOBAL_CONFIG : MatSnackBarConfig = {
  duration: 2500,
  verticalPosition: 'bottom',
  horizontalPosition: 'center'
}

const MATERIAL_MODULES = [
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatButtonModule,
  MatSnackBarModule,
  MatCheckboxModule,
  MatSelectModule,
  MatToolbarModule,
  MatDatepickerModule,
  MatMomentDateModule,
];



@NgModule({
  declarations: [],
  imports: [
  ],
  exports: [...MATERIAL_MODULES],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: MAT_DIALOG_GLOBAL_CONFIG},
    {provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: MAT_DATE_ADAPTER_GLOBAL_CONFIG},
    {provide: MAT_DATE_FORMATS, useValue: MAT_DATEPICKER_GLOBAL_CONFIG},
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: MAT_SNACK_BAR_GLOBAL_CONFIG},
  ]
})
export class MaterialModule { }
