import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appNumericValidator][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: NumericValidatorDirective,
      multi: true
    }
  ]
})
export class NumericValidatorDirective implements Validator {
  validate(control: AbstractControl): { [key: string]: any } | null {
    const value = control.value;
    if (/^[0-9]+$/.test(value)) {
      console.log("all is ok")
      return null; // Валидация успешна
    } else {
      console.log("not ok")
      return { numeric: true }; // Валидация не успешна
    }
  }
}
