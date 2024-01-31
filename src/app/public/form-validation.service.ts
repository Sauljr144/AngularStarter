import { Injectable } from '@angular/core';
import { Validators, FormBuilder, AbstractControl, ValidationErrors, AbstractControlOptions, FormArray } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class FormValidationService {

  forbiddenName(c: AbstractControl): ValidationErrors | null {
    if (c.value && c.value.toLowerCase() === 'test') {
      return { 'forbiddenName': true};
    }
    return null;
  }

  passwordMatch(c: AbstractControl): ValidationErrors | null {
    const password = c.get('password');
      const confirmPassword = c.get('confirmPassword');
   
      if (password?.value && confirmPassword?.value && password.value !== confirmPassword.value) {
        return { 'mismatch': true};
      }
      return null;
    }


  constructor() { }
}
 