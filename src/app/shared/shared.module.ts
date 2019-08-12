import { NgModule } from '@angular/core';
import { MatButtonModule, MatRippleModule, MatTabsModule, MatCardModule, MatInputModule, MatFormFieldModule } from '@angular/material';
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
    ],
    exports: [
        CommonModule,
        MatButtonModule,
        MatRippleModule,
        MatTabsModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        PhoneNumberInputDirective,
    ]
})
export class SharedModule { }
