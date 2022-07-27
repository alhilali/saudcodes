import { Component } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition('void => *', [animate('0.5s 0.5s ease-in')]),
      transition('* => void', [animate('0.5s ease-in')]),
    ]),
  ],
})
export class HomePage {
  titles = ['Web Developer', 'Integration Developer', 'Technology Enthusiast'];
  title = 'Coder';
  constructor() {
    this.setTitle();
  }

  async setTitle() {
    for (const title of this.titles) {
      console.log(title);
      await this.wait(1000);
      this.title = null;
      await this.wait(600);
      this.title = title;
    }
  }

  wait(delay) {
    return new Promise((resolve) => {
      setTimeout(resolve, delay);
    });
  }
}
