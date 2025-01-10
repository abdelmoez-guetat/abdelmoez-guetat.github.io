import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  name: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';

  errorMessage: string = '';
  showToast: boolean = false;  // For controlling the toast visibility

  onSubmit(form: NgForm) {
    if (form.valid) {
      // Here, you can handle actual form submission logic
      console.log(form.value);
      this.errorMessage = ''; // Clear error message if submission is successful

      // Show the success toast
      this.showToast = true;

      // Hide the toast after 5 seconds
      setTimeout(() => {
        this.showToast = false;
      }, 5000);
    } else {
      this.errorMessage = 'Please fill in all required fields.';
    }
  }
}
