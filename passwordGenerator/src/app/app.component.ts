import { Component } from '@angular/core';
import { times } from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'passwordGenerator';
  length: Number = 0;
  features = {
    letters: false,
    numbers: false,
    symbols: false,
  };
  featuresValues = {
    letters: 'abcdefghijklmnopqrstuvwyz',
    numbers: '1234567890',
    symbols: '!@#$%^&*()_-',
  }
  password = '';

  onChangeFeatures(event: any) {
    const { target: { name } } = event;
    this.features[name] = !this.features[name];
  }

  onChangeLength(event: any) {
    this.length = parseInt(event.target.value);
  }
  onButtonClick() {
    console.log(this.features);
    const validChars = Object.keys(this.features)
    .reduce((acc, key) => {
      return acc+= this.features[key] ? this.featuresValues[key] : ''
    }, '');

    let password  = times(this.length, () => validChars[Math.floor(Math.random() * validChars.length)]);
    this.password = password.join('');
  }

}
