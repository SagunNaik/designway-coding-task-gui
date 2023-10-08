import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotesService } from 'src/app/services/notes.service';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-view-shared-note',
  templateUrl: './view-shared-note.component.html',
  styleUrls: ['./view-shared-note.component.scss']
})
export class ViewSharedNoteComponent implements OnInit {

  title: string = "NA";
  content: string = "NA";

  constructor(
    private noteService: NotesService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    const noteId = this.activeRoute.snapshot.params['id'];

    if (noteId) {


      this.noteService.getSharedNote(noteId).subscribe(
        (data: any) => {
          this.title = data.title;
          this.content = data.content;
        },
        (err: any) => {
          this.toastr.error(err.error.message);
        }
      )
    }
  }

  onCloseSharedNoteMode() {
    this.router.navigateByUrl('')
  }


}
