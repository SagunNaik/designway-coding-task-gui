import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import { ToastrService } from "ngx-toastr";
import { Note } from 'src/app/Note';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-edit-notes',
  templateUrl: './create-edit-notes.component.html',
  styleUrls: ['./create-edit-notes.component.scss']
})
export class CreateEditNotesComponent implements OnInit {

  @Input() note: Note;

  isEdit: boolean = false;
  headingTitle: string = "New Note";
  _id: string = '';

  noteForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.maxLength(40)]),
    content: new FormControl('', [Validators.required, Validators.maxLength(9900)]),

  })

  constructor(
    private notesService: NotesService,
    private toastr: ToastrService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    const noteId = this.activeRoute.snapshot.params['id'];

    if (noteId) {
      this._id = noteId;

      this.notesService.getNote(noteId).subscribe(
        (data: any) => {
          this.isEdit = true;
          this.headingTitle = "Update Note"
          this.noteForm = new FormGroup({
            title: new FormControl(data['title'], [Validators.required, Validators.maxLength(38)]),
            content: new FormControl(data['content'], [Validators.required, Validators.maxLength(9900)]),

          })
        },
        (err: any) => {
          this.toastr.error(err.error.message);
        }
      )
    }


  }

  onUpdateSubmit() {
    const payload = this.noteForm.value;

    if (this.isEdit) {
      this.notesService.updateNote(this._id, payload)
        .subscribe(
          (data: any) => {
            this.toastr.success("Note has been updated successfully");
            this.router.navigateByUrl("");

          },
          (err: any) => {
            this.toastr.error(err.error.message);
          }
        )
    }
    else {
      this.notesService.createNote(payload)
        .subscribe(
          (data: any) => {
            this.toastr.success("Note has been created successfully");
            this.router.navigateByUrl("");

          },
          (err: any) => {
            this.toastr.error(err.error.message);
          }
        )
    }
  }

  get title() {
    return this.noteForm.get("title");
  }

  get content() {
    return this.noteForm.get("content");
  }

  get formControls() {
    return this.noteForm.controls;
  }

}
