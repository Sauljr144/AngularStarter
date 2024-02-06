import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl, ValidationErrors, AbstractControlOptions, FormArray } from '@angular/forms';
import { FormValidationService } from '../form-validation.service';

@Component({
  selector: 'pm-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signupForm = this.formValidation.signupForm;

  get firstName() { return this.formValidation.signupForm.get('fName'); }

  get favoriteProducts() { return this.formValidation.signupForm.get('favoriteProducts') as FormArray; }



resetForm() {
  this.formValidation.signupForm.reset();
}

addProduct() {
  this.favoriteProducts.push(this.formBuilder.control(''));
}

setValue() {
  this.formValidation.signupForm.setValue({
    fName: 'Casey',
    lName: 'Valdez',
    mName: 'Casey',
    hasNoMiddleName: true,
    passwordGroup: {
      password: 'password',
      confirmPassword: 'password'
    },
    email: 'email@gmail.com',
    favoriteProducts: ['product1', 'product2'],

  });
}

patchValue(){
  this.formValidation.signupForm.patchValue({
    fName: 'Casey'
  });
}

submitForm() {
  if(this.formValidation.signupForm.invalid) {
    alert('Fix errors on form');
  } else {
    alert('Successful!');
     console.log(this.formValidation.signupForm.value);
    this.formValidation.signupForm.reset();
  }
}

  constructor( private formBuilder: FormBuilder, private formValidation: FormValidationService) { }

  ngOnInit(): void {
    this.formValidation.signupForm.get('hasNoMiddleName')?.valueChanges.subscribe(val => {
        const control = this.formValidation.signupForm.get('mName');
        if(control)
        {
          if(val) {
            control.clearValidators();
          } else {
            control.setValidators(Validators.required);
          }
          control.updateValueAndValidity();
        }
    });
  }

}
