import {
  MatInputModule, MatFormFieldModule, MatExpansionModule, MatListModule, MatDividerModule, MatButtonModule, MatCheckboxModule,
  MatSidenavModule, MatCardModule, MatIconModule, MatToolbarModule, MatSelectModule, MatTabsModule, MatBottomSheetModule,
  MatButtonToggleModule
} from '@angular/material';
import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatToolbarModule,
    MatListModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTabsModule,
    MatBottomSheetModule,
    MatButtonToggleModule
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatToolbarModule,
    MatListModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTabsModule,
    MatBottomSheetModule,
    MatButtonToggleModule
  ],
})
export class AppMaterialModule { }
