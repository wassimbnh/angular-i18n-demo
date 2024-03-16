import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  constructor(private translate: TranslateService) {}

  switchLanguage(lang: 'fr' | 'en' ) {
    this.translate.use(lang)
  }

  onChangeLanguage(event: any) {
    const selectedLanguage = event.target.value;
    if (selectedLanguage) {
      this.switchLanguage(selectedLanguage);
    }
  }
}
