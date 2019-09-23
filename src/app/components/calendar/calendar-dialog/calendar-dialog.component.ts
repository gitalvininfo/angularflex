import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-calendar-dialog",
  templateUrl: "./calendar-dialog.component.html",
  styleUrls: ["./calendar-dialog.component.css"]
})
export class CalendarDialogComponent implements OnInit {
  public form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CalendarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      title: ["", Validators.required],
      start: ["", Validators.required],
      end: "",
      isEdit: false
    });
  }

  ngOnInit() {
    if (this.data){
      this.form.patchValue({
        'title': this.data.title,
        'start': this.data.start,
        'end': this.data.end,
        'isEdit' : true
      })
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}
