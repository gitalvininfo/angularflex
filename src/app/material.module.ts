import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule, MatDialogModule, MatMenuModule, MatButtonModule, MatToolbarModule, MatIconModule, MatBadgeModule, MatSidenavModule, MatListModule, MatGridListModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatRadioModule, MatDatepickerModule,
  MatNativeDateModule, MatChipsModule, MatTooltipModule, MatTableModule, MatPaginatorModule, MatCardModule} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatDialogModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatBadgeModule,
    MatListModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule
  ],
  exports: [
    MatSnackBarModule,
    MatDialogModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatBadgeModule,
    MatListModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatChipsModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule
  ],
  providers: [
    // MatDatepickerModule,
    ]
})
export class MaterialModule { }
