import { Component, OnInit } from '@angular/core';
import { IDepartment } from './Models/IDepartment';
import { DepartmentService } from './Services/department-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FrontEndApp';
  /**
   *
   */
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToDeptPage($event) {
    $event.preventDefault();
    this.router.navigate(['departments']);
  }

  goToHome($event) {
    $event.preventDefault();
    this.router.navigate(['']);
  }
}

