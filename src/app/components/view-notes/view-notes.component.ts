import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Note } from 'src/app/Note';
import { NotesService } from 'src/app/services/notes.service';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-view-notes',
  templateUrl: './view-notes.component.html',
  styleUrls: ['./view-notes.component.scss'],

})
export class ViewNotesComponent implements OnInit {

  @Input() note: Note;
  @Output() refresh: EventEmitter<Note>;

  date: Date;

  _viewNotesModalId: string;
  _isShared: boolean;
  _shareLink: string;
  constructor(
    private router: Router,
    private noteService: NotesService,
    private toastr: ToastrService,
    private activeRoute: ActivatedRoute
  ) {
  }


  ngOnInit(): void {

    this.date = new Date(this.note.createdOn!);
    this._viewNotesModalId = `viewNotesModal-${this.note.id}`;
    this._isShared = this.note.isShared;
    this._shareLink = `${location.origin}/share/view/${this.note.id}`;

  }

  onShareClick(note: Note) {

    const id = note.id?.toString();
    if (id) {
      this._shareLink = `${location.href}share/view/${id}`;
      this.noteService.updateNote(id, { isShared: !this._isShared }).subscribe(
        (data: any) => {
          this.toastr.success("Sharing details updated successfully");

          this._isShared = !this._isShared
        },
        (err: any) => {
          this.toastr.error(err.error.message);
        }
      )
    }
  }

  onEditClick(note: Note) {
    this.router.navigateByUrl(`note/${note.id}`);
  }

  onDeleteClick(note: Note) {
    const id = note.id?.toString();
    if (id) {

      this.noteService.deleteNote(id).subscribe(
        (data: any) => {
          this.toastr.success("Note successfully deleted");


          this.router.navigateByUrl('')
        },
        (err: any) => {
          this.toastr.error(err.error.message);
        }
      )
    }
  }

  openViewNoteModal() {
    const viewNoteModal = document.getElementById(this._viewNotesModalId);

    if (viewNoteModal !== null) {
      viewNoteModal.style.display = "block"
      viewNoteModal.classList.toggle("show");
    }
  }

  closeViewNoteModal() {
    const viewNoteModal = document.getElementById(this._viewNotesModalId);

    if (viewNoteModal !== null) {
      viewNoteModal.classList.toggle("show");
      viewNoteModal.style.display = "none"

    }
  }

  copyToClipboard(shareLinkInput: any) {
    shareLinkInput.select();
    document.execCommand('copy');
    shareLinkInput.setSelectionRange(0, 0);
  }

}
