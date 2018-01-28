import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Student } from '../_model/index';

@Injectable()
export class StudentService {
  constructor(private http: HttpClient) { }

  create(student: Student) {
    return this.http.post('/student', student);
  }
}
