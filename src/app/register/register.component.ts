import { Component} from '@angular/core';
import { Router } from '@angular/router';

import { StudentService } from '../_service';

@Component({
  moduleId: module.id,
  templateUrl: 'register.component.html'
})
export class RegisterComponent {
  model: any = {};
  loading = false;

  constructor(
    private router: Router,
    private studentService: StudentService) { }

  register() {
    this.loading = true;
    this.studentService.create(this.model)
      .subscribe(
        data => {
          this.router.navigate(['/']);
        },
        error => {
          this.loading = false;
        });
  }
}
