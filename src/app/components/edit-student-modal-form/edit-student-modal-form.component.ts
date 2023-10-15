import {Component, Input} from '@angular/core';
import {Student} from "../../entities/student";
import {StudentStorage} from "../../storage/student.storage";
import {StudentsService} from "../../services/students.service";
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'edit-student-modal-form',
  templateUrl: './edit-student-modal-form.component.html',
  styleUrls: ['./edit-student-modal-form.component.css']
})
export class EditStudentModalFormComponent {
  student: Student = new Student();
  reserveStudent: Student = new Student();
  students: StudentStorage = StudentStorage.getStudentsStorage();
  isEditMode: boolean = false;
  constructor(private studentService: StudentsService){}

  init(student: Student): void {
    this.student.copy(student);
    this.reserveStudent.copy(student);
    this.isEditMode = false;
  }

  save(): void {
    this.studentService.editStudent(new Student(
      this.student.name,
      this.student.surname,
      this.student.patronymic,
      this.student.rating,
      this.student.variant,
      this.student.worksSubmitted)).subscribe((edited: Student) =>
      {
        console.log(this.student)
        this.student.copy(edited);
        console.log(this.student)
        this.students.erase(this.student.getFullName());
        this.students.insert(this.student)
        // @ts-ignore
        new bootstrap.Modal(document.getElementById('editStudentModalForm')).hide();
      },
      (error) => {
        console.log("lol you have err")
      })
  }
  discard(): void {
    // @ts-ignore
    this.student = {...this.reserveStudent};
    this.isEditMode = !this.isEditMode;
  }
}
