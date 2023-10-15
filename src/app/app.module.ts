import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { StudentTableComponent } from './components/student-table/student-table.component';
import {HttpClientModule} from "@angular/common/http";

import { CreateStudentModalFormComponent } from './components/create-student-modal-form/create-student-modal-form.component';
import { NgOptimizedImage } from "@angular/common";
import { StudentsService } from "./services/students.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NgbActiveModal, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { EditStudentModalFormComponent } from './components/edit-student-modal-form/edit-student-modal-form.component';
import {NumericValidatorDirective} from "./validators/numeric-validator";
import { ErrorMessageModalFormComponent } from './components/error-message-modal-form/error-message-modal-form.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentTableComponent,
    CreateStudentModalFormComponent,
    EditStudentModalFormComponent,
    NumericValidatorDirective,
    ErrorMessageModalFormComponent
  ],
    imports: [
        NgbModule,
        BrowserModule,
        HttpClientModule,
        NgOptimizedImage,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [
    StudentsService,
    NgbActiveModal
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
