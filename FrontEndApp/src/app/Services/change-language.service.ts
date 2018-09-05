import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ChangeLanguageService {
  CurrentLanguage: string = "en-US";
  constructor() {}
}
