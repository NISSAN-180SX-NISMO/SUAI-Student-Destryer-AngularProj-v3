import {Component} from '@angular/core';
import {Student} from "../../entities/student";
import {StudentStorage} from "../../storage/student.storage";





@Component({
  selector: 'create-student-modal-form',
  templateUrl: './create-student-modal-form.component.html',
  styleUrls: ['./create-student-modal-form.component.css']
})
export class CreateStudentModalFormComponent {

  isError: boolean = false;
  errorMessage: string = "Not Found!";
  student: Student = new Student();
  studentStorage: StudentStorage = StudentStorage.getStudentsStorage();

  init(): void {
    this.isError = false;
    this.errorMessage = "Not Found!";
    this.student = new Student();
  }

  save() {
    if (this.student.isValid()) {


    } else console.log("ERRRRORRR")

  }

}
