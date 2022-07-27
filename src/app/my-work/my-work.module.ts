import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyWorkPageRoutingModule } from './my-work-routing.module';

import { MyWorkPage } from './my-work.page';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import createTranslateLoader from '../app.module';
import { HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    MyWorkPageRoutingModule,
  ],
  declarations: [MyWorkPage],
})
export class MyWorkPageModule {}
