import { IDepartment } from "./../../Models/IDepartment";
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { DepartmentService } from "../../Services/department-service.service";
import { TranslateService } from "@ngx-translate/core";
import { ChangeLanguageService } from "../../Services/change-language.service";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-edit-department",
  templateUrl: "./edit-department.component.html",
  styleUrls: ["./edit-department.component.css"]
})
export class EditDepartmentComponent implements OnInit {
  id: string = "";
  EditForm: FormGroup;
  dept: IDepartment;
  valuesChanged: boolean = false;
  @ViewChild("toggleBtn")
  toggleBtn: ElementRef;
  @ViewChild("closeModal")
  closeModal: ElementRef;

  constructor(
    private departmentService: DepartmentService,
    private translate: TranslateService,
    private Language: ChangeLanguageService,
    private router: Router,
    private routr: ActivatedRoute,
    private fb: FormBuilder
  ) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang(this.Language.CurrentLanguage.split("-")[0]);

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use(this.Language.CurrentLanguage.split("-")[0]);
  }

  ngOnInit() {
    this.id = this.routr.snapshot.params["id"];
    this.detDepartmentById(this.id);
  }

  DDLChanged($event) {
    if (this.valuesChanged) {
      this.toggleBtn.nativeElement.click();
      return;
    }
    this.translate.use(this.Language.CurrentLanguage.split("-")[0]);
    this.detDepartmentById(this.id);
  }

  detDepartmentById(id: string) {
    this.departmentService
      .getDepartmentById(id)
      .subscribe((data: IDepartment) => {
        this.dept = data;
        this.EditForm = this.fb.group({
          name: [this.dept.name, Validators.required],
          description: [this.dept.description, Validators.required]
        });
        this.onChanges();
      });
  }

  submitHandler() {
    this.departmentService.updateDepartment(this.dept).subscribe(() => {
      console.log("Updated");
      this.closeModal.nativeElement.click();
    });
  }

  onChanges(): void {
    this.EditForm.valueChanges.subscribe(val => {
      if (this.Language.CurrentLanguage.split("-")[0] == "ar") {
        this.dept.nameAr = this.EditForm.value["name"];
        this.dept.descriptionAr = this.EditForm.value["description"];
      } else {
        this.dept.nameEn = this.EditForm.value["name"];
        this.dept.descriptionEn = this.EditForm.value["description"];
      }
      this.valuesChanged = true;
    });
  }

  DiscardChanges() {
    this.valuesChanged = false;
    this.DDLChanged(undefined);
  }
}
