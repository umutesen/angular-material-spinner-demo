import { NgModule } from '@angular/core';
import { MatButtonModule, MatProgressBarModule, MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatProgressSpinnerModule,
    MatProgressBarModule
  ],
  exports: [
    MatButtonModule,
    MatProgressSpinnerModule,
    MatProgressBarModule
  ]
})
export class CustomMaterialModule {
}