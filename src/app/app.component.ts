import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { ThemeService } from './services/theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private translate: TranslateService,
    public themeService: ThemeService
  ) {
    this.initializeApp();
  }
  initializeApp() {
    this.setLanguage();
  }

  setLanguage() {
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('ar');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translate.use('ar');

    // this is to determine the text direction depending on the selected language
    // for the purpose of this example we determine that only arabic and hebrew are RTL.
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      const textDir = event.lang === 'ar' ? 'rtl' : 'ltr';
      const htmlTag = this.document.getElementsByTagName(
        'html'
      )[0] as HTMLHtmlElement;
      htmlTag.dir = textDir;
      htmlTag.lang = event.lang;
    });
  }
}
