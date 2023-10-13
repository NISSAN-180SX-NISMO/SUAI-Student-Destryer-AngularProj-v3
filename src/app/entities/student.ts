export class Student {
  name: string;
  patronymic: string;
  surname: string;
  rating: number;
  variant: number;
  worksSubmitted: number;
constructor() {
  this.name = '';
  this.patronymic = '';
  this.surname = '';
  this.rating = 0;
  this.variant = 0;
  this.worksSubmitted = 0;
}
  getFullName(): string {
    return this.name + this.surname + this.patronymic;
  }

  isValid(): boolean {
    return (this.name != "" && this.surname != "" && this.rating != 0 && this.worksSubmitted != 0 && this.variant != 0)
  }
  // Реализация класса Student
}
