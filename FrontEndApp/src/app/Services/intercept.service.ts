import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpParams
} from "@angular/common/http";
import { Observable } from "rxjs";
import { ChangeLanguageService } from "./change-language.service";

@Injectable({
  providedIn: "root"
})
export class InterceptService implements HttpInterceptor {
  constructor(private Language: ChangeLanguageService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = request.clone({
      params: new HttpParams().set("culture", this.Language.CurrentLanguage)
    });
    return next.handle(request);
  }
}
