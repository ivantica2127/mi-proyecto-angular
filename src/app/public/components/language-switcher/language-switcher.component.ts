import { Component } from '@angular/core';
import {MatButtonToggle, MatButtonToggleGroup} from '@angular/material/button-toggle';
import {TranslateModule, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-language-switcher',
  imports: [
    MatButtonToggleGroup,
    MatButtonToggle,
    TranslateModule
  ],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.css'
})
export class LanguageSwitcherComponent {
  protected currentLang: string = 'en';

  /** List of available language codes */
  protected languages: string[] = ['en', 'es'];
  constructor(private translate: TranslateService) {
    this.currentLang = this.translate.currentLang;
  }

  /**
   * Changes the application's current language.
   * Updates both the translation service and the component's local state.
   *
   * @param language - The language code to switch to (e.g., 'en', 'es')
   */
  useLanguage(language: string) {
    this.translate.use(language);
    this.currentLang = language;
  }
}
