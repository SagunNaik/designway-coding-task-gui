import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/Note';
import { NotesService } from 'src/app/services/notes.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  notes: Note[];

  searchText: string = '';

  _filterNotes: Note[]

  constructor(
    private noteService: NotesService,
  ) {
    this.noteService.getAllNotes().subscribe((data: any[]) => {

      this.notes = data;
      this._filterNotes = data;
    })
  }


  ngOnInit(): void {

    this.search();
  }

  searchKey(data: string) {
    this.searchText = data;
    this.search();
  }

  search() {
    this._filterNotes = this.searchText === "" || !this.searchText ? this.notes : this.notes.filter((note) => {
      return note.title.toLowerCase().includes(this.searchText.toLowerCase());
    });

  }


}
