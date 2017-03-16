import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
emailList: Array<string>;
validationMessage: string;

 constructor () {
   this.emailList = [
     'maggie.mccain13@gmail.com',
    'tom.brady@gmail.com', 
    'julian.edelman@gmail.com']
 };

 emailSubmission (form: any) {
   this.validateEmail(form.email) && this.emailList.push(form.email);
   //form.reset(); // not clearing
 };

  validateEmail(email: string) {
  // chromium email validation 
  let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  console.log(re.test(email))
  if (re.test(email)) {
    this.validationMessage === 'success';
    return true;
  } else {
    this.validationMessage === 'error';
    return false;
  }
  }

 ngOnInit () {
   this.validationMessage = '';
 }
}
