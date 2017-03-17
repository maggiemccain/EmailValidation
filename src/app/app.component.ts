import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  emailList: any = [];
  validationMessage: string;
  model: any;

  constructor () {
    this.emailList = [
      'maggie.mccain13@gmail.com',
      'tom.brady@gmail.com', 
      'julian.edelman@gmail.com']
  };

  onSubmit (formSubmitted: any) {
    this.model = formSubmitted;
    this.validateEmail(this.model.emailAddress) && this.emailList.push(this.model.emailAddress);
    this.model = {};
  };

  validateEmail(email: string) {
    // chromium email validation 
    let emailFormat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailFormat.test(email) && !this.emailList.includes(email)) {
      this.validationMessage = 'success';
      return true;
    } else {
      this.validationMessage = 'error';
      return false;
    }
  };

  formEmpty() {
    if (!this.model.emailAddress) {
      return true;
    }
  };

  ngOnInit () {
    this.model = {};
    this.validationMessage = '';
  }
}
