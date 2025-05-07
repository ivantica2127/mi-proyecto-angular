import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MatToolbar, MatToolbarRow} from '@angular/material/toolbar';
import {MatAnchor} from '@angular/material/button';
import {LanguageSwitcherComponent} from './public/components/language-switcher/language-switcher.component';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {BackbuttonComponent} from './shared/components/backbutton/backbutton.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    MatToolbar,
    MatToolbarRow,
    MatAnchor,
    RouterLink,
    RouterLinkActive,
    LanguageSwitcherComponent,
    TranslatePipe, BackbuttonComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  /** Application title */
  title = 'learning-center';

  /**
   * Navigation options for the main menu.
   * Each option contains a route link and a translation label key.
   */
  options = [
    {link: '/home', label: 'home'},
    {link: '/about', label: 'about'},
    {link: '/learning/courses', label: 'courses'},
  ]
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}
