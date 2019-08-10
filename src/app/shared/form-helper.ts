import { AbstractControl, FormGroup } from '@angular/forms';

export function verifyFieldsMatch(control1: AbstractControl, control2: AbstractControl) {
    if(control1.touched && control2.touched) {
        return control1.value === control2.value;
    }
    return true;
}

export function markFormAsDirtyAndTouched(form: FormGroup) {
    form.markAsDirty();
    form.markAsTouched();
    Object.keys(form.controls).forEach(control => {
        form.controls[control].markAsDirty();
        form.controls[control].markAsTouched();
    })
}

export function trimAllFormValues(form: FormGroup) {
    Object.keys(form.controls).forEach(control => {
        const formControl = form.controls[control];
        const trimmedValue = (formControl.value || '').trim();
        formControl.setValue(trimmedValue);
        formControl.updateValueAndValidity();
    })
}