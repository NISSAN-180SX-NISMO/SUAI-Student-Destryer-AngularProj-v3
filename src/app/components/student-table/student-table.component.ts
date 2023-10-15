import {Component, OnInit, ViewChild} from '@angular/core';
import {StudentStorage} from "../../storage/student.storage";
import {Student} from "../../entities/student";
import {StudentsService} from "../../services/students.service";

import * as bootstrap from 'bootstrap';
import {CreateStudentModalFormComponent} from "../create-student-modal-form/create-student-modal-form.component";
import {EditStudentModalFormComponent} from "../edit-student-modal-form/edit-student-modal-form.component";
import {ErrorMessageModalFormComponent} from "../error-message-modal-form/error-message-modal-form.component";


@Component({
  selector: 'student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent implements OnInit {


  @ViewChild(CreateStudentModalFormComponent) createStudentModalFormComponent: CreateStudentModalFormComponent | undefined;
  @ViewChild(EditStudentModalFormComponent) editStudentModalFormComponent: EditStudentModalFormComponent | undefined;
  @ViewChild(ErrorMessageModalFormComponent) errorMessageModalFormComponent: ErrorMessageModalFormComponent | undefined;
  openCreateStudentModalFormComponent(): void {
    this.createStudentModalFormComponent?.init();
    // @ts-ignore
    const myModal = new bootstrap.Modal(document.getElementById('createStudentModalForm'));
    myModal.show();
  }
  openEditStudentModalFormComponent(student: Student): void {
    this.editStudentModalFormComponent?.init(student);
    // @ts-ignore
    const myModal = new bootstrap.Modal(document.getElementById('editStudentModalForm'));
    myModal.show();
  }
  openErrorMessageModalFormComponent(errorMessage: string): void {
    this.errorMessageModalFormComponent?.init(errorMessage);
    // @ts-ignore
    const myModal = new bootstrap.Modal(document.getElementById('errorMessageModalForm'));
    myModal.show();
  }

  constructor(private studentService: StudentsService){}
  students: StudentStorage = StudentStorage.getStudentsStorage();
  ngOnInit(): void {
    this.studentService.getStudents().subscribe((data: Student[]) => {
      console.log(data)
      data.forEach((student) => { this.students.insert(student); });
    });
  }
  searchQuery: string = '';
  searchStudent(): void {
    if (this.searchQuery === '') return

    this.studentService.getStudent(this.searchQuery).subscribe(
      (student) => { this.openEditStudentModalFormComponent(student) },
      (error) => { if (error.status == 404) { this.openErrorMessageModalFormComponent("not found"); } }
    );
  }

}
