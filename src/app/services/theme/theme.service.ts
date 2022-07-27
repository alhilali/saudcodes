/* eslint-disable no-underscore-dangle */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { LanguageService } from '../language/language.service';
import { Theme, ThemeOptions } from './theme-options.model';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private defaultOptions: ThemeOptions = {
    theme: Theme.LIGHT, // two possible values: light, dark
    languageCode: 'ar', // ar, en
  };

  private _options: ThemeOptions;

  public get options(): ThemeOptions {
    return this._options;
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private languageService: LanguageService
  ) {
    const currentOptions = JSON.parse(localStorage.getItem('theme') as any);
    if (!currentOptions) {
      this._options = this.defaultOptions;
      this.setOptions(this._options);
    } else {
      this._options = currentOptions;
    }
    this.reflectTheme();
    // this.document.body.classList.remove(Theme.DARK);
  }

  setOptions(options: ThemeOptions) {
    localStorage.setItem('theme', JSON.stringify(options));
  }

  toggleTheme(theme?: Theme) {
    if (!theme) {
      this._options.theme =
        this._options.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    } else {
      this._options.theme = theme;
    }

    this.document.body.classList.toggle(
      Theme.DARK,
      this._options.theme === Theme.DARK
    );
    this.setOptions(this._options);
  }

  setLanguage(languageCode?: string) {
    const updatedLangCode = this.languageService.changeLanguage(languageCode);
    this._options.languageCode = updatedLangCode;
    this.setOptions(this._options);
  }

  reflectTheme() {
    this.toggleTheme(this._options.theme);
    this.setLanguage(this._options.languageCode);
  }
}
