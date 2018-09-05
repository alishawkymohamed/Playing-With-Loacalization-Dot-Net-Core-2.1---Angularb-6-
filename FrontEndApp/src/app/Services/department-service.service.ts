import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { IDepartment } from "../Models/IDepartment";

@Injectable({
  providedIn: "root"
})
export class DepartmentService {
  constructor(private http: HttpClient) {}

  getAllDepartments(): Observable<IDepartment[]> {
    return this.http.get<IDepartment[]>("http://localhost:5000/api/department");
  }

  getDepartmentById(id: string): Observable<IDepartment> {
    return this.http.get<IDepartment>(
      `http://localhost:5000/api/department/${id}`
    );
  }

  updateDepartment(dept: IDepartment): Observable<void> {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.put<void>(
      `http://localhost:5000/api/department`,
      JSON.stringify(dept),
      { headers }
    );
  }
}
