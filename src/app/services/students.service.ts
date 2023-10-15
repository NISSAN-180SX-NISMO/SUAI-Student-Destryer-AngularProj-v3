import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Student} from "../entities/student";
import {map, Observable} from "rxjs";


@Injectable()
export class StudentsService {
  constructor(private http: HttpClient) {}

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>('http://localhost:8080/students', { observe: 'body', responseType: 'json' })
      .pipe(
        map(data => data as Student[])
      );
  }
  getStudent(fullName: string): Observable<Student> {
    return this.http.get<Student>('http://localhost:8080/students/' + encodeURIComponent(fullName), { observe: 'body', responseType: 'json' }).
    pipe( map(data => data as Student) );
  }
  createStudent(student: Student): Observable<Student> {
    return this.http.post<Student>('http://localhost:8080/students', student);
  }

  editStudent(student: Student): Observable<Student> {
    return this.http.put<Student>('http://localhost:8080/students/' + encodeURIComponent(student.getFullName()), student, { observe: 'body', responseType: 'json'})
  }
}
