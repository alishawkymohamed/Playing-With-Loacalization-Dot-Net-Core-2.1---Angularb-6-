import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import {
  HttpClientModule,
  HTTP_INTERCEPTORS,
  HttpClient
} from "@angular/common/http";
import { DepartmentsComponent } from "./Compenents/departments/departments.component";
import { EditDepartmentComponent } from "./Compenents/edit-department/edit-department.component";
import { PageNotFoundComponent } from "./Compenents/page-not-found/page-not-found.component";
import { MainComponent } from "./Compenents/main/main.component";
import { ChangeLanguageComponent } from "./Compenents/change-language/change-language.component";
import { InterceptService } from "./Services/intercept.service";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

const appRoutes: Routes = [
  { path: "", component: MainComponent },
  { path: "departments", component: DepartmentsComponent },
  { path: "departments/:id", component: EditDepartmentComponent },
  { path: "**", component: PageNotFoundComponent }
];

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DepartmentsComponent,
    EditDepartmentComponent,
    PageNotFoundComponent,
    ChangeLanguageComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    InterceptService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
