import { Component, VERSION } from '@angular/core';

export type AccessibleValue<T> =
  | { isAccessible: true; value: T }
  | {
      isAccessible: false;
      value: null;
    };

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  testValue: { accessible: AccessibleValue<string> } = {
    accessible: { isAccessible: true, value: 'type narrowing test' },
  };
  stringOnlyToTest!: string;

  test() {
    // this.stringOnlyToTest = this.testValue.accessible.value; throws as it should

    if (this.testValue.accessible.isAccessible) {
      this.stringOnlyToTest = this.testValue.accessible.value;
    }
  }
}
