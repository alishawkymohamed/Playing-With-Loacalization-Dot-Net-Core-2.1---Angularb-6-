import { Component, OnInit } from "@angular/core";
import { DepartmentService } from "../../Services/department-service.service";
import { IDepartment } from "../../Models/IDepartment";
import { TranslateService } from "@ngx-translate/core";
import { ChangeLanguageService } from "../../Services/change-language.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-departments",
  templateUrl: "./departments.component.html",
  styleUrls: ["./departments.component.css"]
})
export class DepartmentsComponent implements OnInit {
  depts: IDepartment[];
  constructor(
    private departmentService: DepartmentService,
    private translate: TranslateService,
    private Language: ChangeLanguageService,
    private router: Router
  ) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang(this.Language.CurrentLanguage.split("-")[0]);

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use(this.Language.CurrentLanguage.split("-")[0]);
  }

  ngOnInit() {
    this.getAllDepts();
  }

  DDLChanged($event) {
    this.translate.use(this.Language.CurrentLanguage.split("-")[0]);
    this.getAllDepts();
  }

  getAllDepts() {
    this.departmentService
      .getAllDepartments()
      .subscribe((data: IDepartment[]) => {
        this.depts = data;
      });
  }

  EditDept(Department) {
    this.router.navigate(["departments", `${Department.departmentId}`]);
  }
}
