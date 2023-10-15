import {Student} from "../entities/student";

export class StudentStorage {
  private static instance: StudentStorage;
  static getStudentsStorage() {
    if (!StudentStorage.instance)
      StudentStorage.instance = new StudentStorage();
    return StudentStorage.instance;
  }
  private constructor(private studentList: Student[] = []) { }
  private sort(): void {
    this.studentList = this.studentList.sort((a, b) => a.surname.localeCompare(b.surname));
  }
  erase(fullName: string) {
    this.studentList = this.studentList.filter((student) => student.getFullName() !== fullName);
    this.sort();
  }
  find(fullName: string) {
    for (let i = 0; i < this.studentList.length; i++)
      if (this.studentList[i].getFullName() === fullName) return this.studentList[i];
    return new Student();
  }
  insert(value: Student) {
    const newStudent: Student = new Student();
    newStudent.copy(value);
    this.studentList.push(newStudent);
    this.sort();
  }
  size() {
    return this.studentList.length;
  }
  getAll() {
    this.sort();
    return this.studentList;
  }
}
