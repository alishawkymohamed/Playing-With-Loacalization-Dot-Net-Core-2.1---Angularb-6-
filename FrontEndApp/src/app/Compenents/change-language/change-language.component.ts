import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { ChangeLanguageService } from "../../Services/change-language.service";

@Component({
  selector: "app-change-language",
  templateUrl: "./change-language.component.html",
  styleUrls: ["./change-language.component.css"]
})
export class ChangeLanguageComponent implements OnInit {
  @Output()
  DDLChanged: EventEmitter<string> = new EventEmitter();
  constructor(private Language: ChangeLanguageService) {}

  ngOnInit() {}

  Changed($event) {
    if ($event.target.value != 0) {
      this.Language.CurrentLanguage = $event.target.value;
      this.DDLChanged.emit($event.target.value);
      // console.log($event.target.value);
    }
  }
}
