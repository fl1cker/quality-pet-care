import { NgModule } from '@angular/core';
import { MatButtonModule, MatRippleModule, MatTabsModule, MatCardModule, MatInputModule, MatFormFieldModule, MatStepperModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { PhoneNumberInputDirective } from './directives/phone-number-input.directive';

@NgModule({
    declarations: [
        PhoneNumberInputDirective
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatRippleModule,
        MatTabsModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatStepperModule,
    ],
    exports: [
        CommonModule,
        MatButtonModule,
        MatRippleModule,
        MatTabsModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatStepperModule,
        PhoneNumberInputDirective,
    ]
})
export class SharedModule { }
