import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter, withComponentInputBinding } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateEditNotesComponent } from './components/create-edit-notes/create-edit-notes.component';
import { ViewNotesComponent } from './components/view-notes/view-notes.component';
import { ViewSharedNoteComponent } from './modals/view-note/view-shared-note.component';
import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuardService] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService] },
  { path: 'note', component: CreateEditNotesComponent, canActivate: [AuthGuardService] },
  { path: 'note/:id', component: CreateEditNotesComponent, canActivate: [AuthGuardService] },
  { path: 'view', component: ViewNotesComponent, canActivate: [AuthGuardService] },
  { path: 'share/view/:id', component: ViewSharedNoteComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },


  //Page not found
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [
    provideRouter(routes, withComponentInputBinding()),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
