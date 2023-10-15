

export class Student {
  name: string;
  surname: string;
  patronymic: string;
  rating: number;
  variant: number;
  worksSubmitted: number;

  constructor(name: string = '', surname: string = '', patronymic: string = '', rating: number = 0, variant: number = 0, worksSubmitted: number = 0) {
    this.name = name;
    this.patronymic = patronymic;
    this.surname = surname;
    this.rating = rating;
    this.variant = variant;
    this.worksSubmitted = worksSubmitted;
  }

  getFullName(): string {
    return this.surname + this.name + this.patronymic;
  }

  isValid(): boolean {
    return (this.name != "" && this.surname != "" && this.rating != 0 && this.worksSubmitted != 0 && this.variant != 0)
  }

  copy(otherStudent: Student): void {
    this.name = otherStudent.name;
    this.surname = otherStudent.surname;
    this.patronymic = otherStudent.patronymic;
    this.variant = otherStudent.variant;
    this.rating = otherStudent.rating;
    this.worksSubmitted = otherStudent.worksSubmitted;
  }
  // Реализация класса Student
}
