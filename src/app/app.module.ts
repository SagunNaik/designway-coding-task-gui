import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateEditNotesComponent } from './components/create-edit-notes/create-edit-notes.component';
import { ViewNotesComponent } from './components/view-notes/view-notes.component';
import { LayoutComponent } from './components/layout/layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ViewSharedNoteComponent } from './modals/view-note/view-shared-note.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    PageNotFoundComponent,
    DashboardComponent,
    CreateEditNotesComponent,
    ViewNotesComponent,
    LayoutComponent,
    AboutUsComponent,
    ViewSharedNoteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [
    provideAnimations(),
    provideToastr({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      easing: 'ease-in',
      autoDismiss: true,
    }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
