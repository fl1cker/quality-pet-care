import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Regex } from 'src/app/shared/classes/regex';

@Component({
    selector: 'qpc-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
    signInForm: FormGroup;
    Regex = Regex;

    constructor(private formBuilder: FormBuilder) {
        this.signInForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.pattern(Regex.email.pattern)]],
            password: ['', Validators.required],
        });
    }

    signUpButtonClicked() {
        console.log('submit clicked with: ', this.signInForm.value);
    }

    cancelButtonClicked() {
        console.log('cancel clicked');
    }
}
