import {NgModule} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatNativeDateModule} from '@angular/material/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatButtonModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule
  ],
  providers: [MatDatepickerModule],
})

export class MaterialModule {
}
