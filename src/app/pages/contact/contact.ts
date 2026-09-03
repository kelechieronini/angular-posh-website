import { Component, signal } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

function allFieldsRequiredValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const group = control as FormGroup;
    const missingFields: string[] = [];

    for (const key of Object.keys(group.controls)) {
      if (
        group.controls[key].value === null ||
        group.controls[key].value === undefined ||
        group.controls[key].value === ''
      ) {
        missingFields.push(key);
      }
    }

    return missingFields.length > 0 ? { requiredFields: missingFields } : null;
  };
}

import { ValidatorFn } from '@angular/forms';
import { Button } from "../../components/button/button";

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, Button],
  templateUrl: './contact.html',
})
export class Contact {
  submitted = signal(false);

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group(
      {
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        subject: ['', Validators.required],
        message: ['', Validators.required],
      },
      { validators: allFieldsRequiredValidator() },
    );
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.submitted.set(true);
    }
  }

  resetForm(): void {
    this.contactForm.reset();
    this.submitted.set(false);
  }
}
