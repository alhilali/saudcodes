import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageModel } from './language.model';

@Injectable()
export class LanguageService {
  languages: Array<LanguageModel> = new Array<LanguageModel>();

  constructor(public translate: TranslateService) {
    this.languages.push(
      { name: 'Arabic', code: 'ar' },
      { name: 'English', code: 'en' }
    );
  }

  getLanguages() {
    return this.languages;
  }

  changeLanguage(languageCode?: string) {
    const lang = languageCode
      ? languageCode
      : this.translate.currentLang === 'ar'
      ? 'en'
      : 'ar';
    this.translate.use(lang);
    return lang;
  }
}
