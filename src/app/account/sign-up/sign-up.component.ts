import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Regex } from 'src/app/shared/classes/regex';
import { verifyFieldsMatch, markFormAsDirtyAndTouched, trimAllFormValues } from 'src/app/shared/form-helper';
import { IfStmt } from '@angular/compiler';

@Component({
    selector: 'qpc-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['../entry-forms.scss', './sign-up.component.scss']
})
export class SignUpComponent {
    credentialsForm: FormGroup;
    userInfoForm: FormGroup;
    Regex = Regex;

    constructor(private formBuilder: FormBuilder) {
        this.credentialsForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.pattern(Regex.email.pattern)]],
            verifyEmail: [''],
            password: ['', Validators.required], // ToDo: implement strong password requirements
            verifyPassword: ['']
        });

        this.userInfoForm = this.formBuilder.group({
            firstName: [''],
            lastName: [''],
            addressStreet1: [''],
            addressStreet2: [''],
            addressCity: [''],
            addressState: [''],
            addressZip: [''],
            phoneNumber: ['']
        });
    }

    submitButtonClicked() {
        console.log('submit clicked with: ', this.credentialsForm.value);
        console.log('submit clicked with: ', this.userInfoForm.value);
    }

    cancelButtonClicked() {
        console.log('cancel clicked');
    }

    verifyEmailFieldsMatch() {
        const doesMatch = verifyFieldsMatch(this.credentialsForm.controls.email, this.credentialsForm.controls.verifyEmail, false);
        if (!doesMatch) {
            const errors = this.credentialsForm.controls.verifyEmail.errors || {};
            errors.fieldMismatch = true;
            this.credentialsForm.controls.verifyEmail.setErrors(errors);
            return false;
        } else {
            if (this.credentialsForm.controls.verifyEmail.hasError('fieldMismatch')) {
                delete this.credentialsForm.controls.verifyEmail.errors.fieldMismatch;
                this.credentialsForm.controls.verifyEmail.updateValueAndValidity();
            }
            return true;
        }
    }

    updatePhoneNumber(phoneNumber: string) {
        this.userInfoForm.controls.phoneNumber.setValue(phoneNumber);
    }

    verifyPasswordFieldsMatch() {
        const doesMatch = verifyFieldsMatch(this.credentialsForm.controls.password, this.credentialsForm.controls.verifyPassword, true);
        if (!doesMatch) {
            const errors = this.credentialsForm.controls.verifyPassword.errors || {};
            errors.fieldMismatch = true;
            this.credentialsForm.controls.verifyPassword.setErrors(errors);
        } else {
            if (this.credentialsForm.controls.verifyPassword.hasError('fieldMismatch')) {
                delete this.credentialsForm.controls.verifyPassword.errors.fieldMismatch;
                this.credentialsForm.controls.verifyPassword.updateValueAndValidity();
            }
        }
    }
}
