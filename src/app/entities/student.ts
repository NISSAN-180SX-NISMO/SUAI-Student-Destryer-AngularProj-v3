export class Student {
  name: string =            '';
  patronymic: string =      '';
  surname: string =         '';
  rating: number =          0;
  variant: number =         0;
  worksSubmitted: number =  0;

  getFullName(): string {
    return this.name + this.surname + this.patronymic;
  }
  // Реализация класса Student
}
