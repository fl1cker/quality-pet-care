import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Regex } from 'src/app/shared/classes/regex';
import { verifyFieldsMatch } from 'src/app/shared/form-helper';
import { GlobalService } from 'src/app/shared/services/global.service';
import { USState } from 'src/app/shared/models/us-state';

@Component({
    selector: 'qpc-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['../entry-forms.scss', './sign-up.component.scss']
})
export class SignUpComponent {
    credentialsForm: FormGroup;
    userInfoForm: FormGroup;
    Regex = Regex;
    usStates: USState[] = [];

    constructor(private formBuilder: FormBuilder, private globalService: GlobalService) {
        this.usStates = this.globalService.getStates();
        this.credentialsForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.pattern(Regex.email.pattern)]],
            verifyEmail: [''],
            password: ['', Validators.required], // ToDo: implement strong password requirements
            verifyPassword: ['']
        });

        this.userInfoForm = this.formBuilder.group({
            firstName: ['', Validators.pattern(Regex.name.pattern)],
            lastName: ['', Validators.pattern(Regex.name.pattern)],
            addressStreet1: ['', Validators.pattern(Regex.address.pattern)],
            addressStreet2: ['', Validators.pattern(Regex.address.pattern)],
            addressCity: ['', Validators.pattern(Regex.name.pattern)],
            addressState: [''],
            addressZip: ['', Validators.pattern(Regex.zip.pattern)],
            phoneNumber: ['', Validators.minLength(14)], // (XXX) XXX-XXXX
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
