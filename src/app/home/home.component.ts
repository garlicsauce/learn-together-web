import { Component } from '@angular/core';

import { Student } from '../_model/index';
import { StudentService } from '../_service/index';

@Component({
  moduleId: module.id,
  templateUrl: 'home.component.html'
})
export class HomeComponent {
  currentStudent: Student;
  students: Student[] = [];

  constructor(private studentService: StudentService) {
    this.currentStudent = JSON.parse(localStorage.getItem('currentStudent'));
  }
}
