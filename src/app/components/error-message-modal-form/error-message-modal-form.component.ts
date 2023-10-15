import { Component } from '@angular/core';

@Component({
  selector: 'error-message-modal-form',
  templateUrl: './error-message-modal-form.component.html',
  styleUrls: ['./error-message-modal-form.component.css']
})
export class ErrorMessageModalFormComponent {
  errorMessage: string = "Unknown error";
  init(errorMessage: string = "Unknown error"):void {
    this.errorMessage = errorMessage;
  }
}
