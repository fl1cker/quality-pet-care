import { AbstractControl, FormGroup } from '@angular/forms';

export function verifyFieldsMatch(control1: AbstractControl, control2: AbstractControl, isCaseSensitive: boolean) {
    if(control1.touched && control2.touched) {
        if(isCaseSensitive) {
            return control1.value === control2.value; 
        }
        
        const val1 = control1.value ? control1.value.toString().toLocaleLowerCase() : control1.value;
        const val2 = control2.value ? control2.value.toString().toLocaleLowerCase() : control2.value;

        return val1 === val2;
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