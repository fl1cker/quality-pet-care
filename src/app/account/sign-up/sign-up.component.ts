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
    signUpForm: FormGroup;
    userInfoForm: FormGroup;
    step = 1;
    Regex = Regex;

    constructor(private formBuilder: FormBuilder) {
        this.signUpForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.pattern(Regex.email.pattern)]],
            verifyEmail: [''],
            password: ['', Validators.required],
            verifyPassword: ['']
        });
        
        this.userInfoForm = this.formBuilder.group({
            firstName: [],
            lastName: [],
            addressStreet1: [],
            addressStreet2: [],
            addressCity: [],
            addressState: [],
            addressZip: [],
            phoneNumber: []
        })
    }

    submitButtonClicked() {
        console.log('submit clicked with: ', this.signUpForm.value);
        console.log('submit clicked with: ', this.userInfoForm.value);
    }

    cancelButtonClicked() {
        console.log('cancel clicked');
    }

    backButtonClicked() {
        this.step -= 1;
    }

    nextButtonClicked() {
        trimAllFormValues(this.signUpForm);
        markFormAsDirtyAndTouched(this.signUpForm);
        if(this.signUpForm.valid) {
            this.step += 1;
        }
    }

    verifyEmailFieldsMatch() {
        const doesMatch = verifyFieldsMatch(this.signUpForm.controls.email, this.signUpForm.controls.verifyEmail)
        if(!doesMatch) {
            const errors = this.signUpForm.controls.verifyEmail.errors || {} ;
            errors.fieldMismatch = true;
            this.signUpForm.controls.verifyEmail.setErrors(errors);
            return false;
        } else {
            if(this.signUpForm.controls.verifyEmail.hasError('fieldMismatch')) {
                delete this.signUpForm.controls.verifyEmail.errors.fieldMismatch;
                this.signUpForm.controls.verifyEmail.updateValueAndValidity();
            }
            return true;
        }
    }

    verifyPasswordFieldsMatch() {
        const doesMatch = verifyFieldsMatch(this.signUpForm.controls.password, this.signUpForm.controls.verifyPassword)
        if(!doesMatch) {
            const errors = this.signUpForm.controls.verifyPassword.errors || {} ;
            errors.fieldMismatch = true;
            this.signUpForm.controls.verifyPassword.setErrors(errors);
        } else {
            if(this.signUpForm.controls.verifyPassword.hasError('fieldMismatch')) {
                delete this.signUpForm.controls.verifyPassword.errors.fieldMismatch;
                this.signUpForm.controls.verifyPassword.updateValueAndValidity();
            }
        }
    }
}
