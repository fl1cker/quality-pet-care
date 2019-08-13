import { NgModule } from '@angular/core';
import { MatButtonModule, MatRippleModule, MatTabsModule, MatCardModule, MatInputModule, MatFormFieldModule, MatStepperModule, MatSelectModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { PhoneNumberInputDirective } from './directives/phone-number-input.directive';
import { GlobalService } from './services/global.service';

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
        MatSelectModule,
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
        MatSelectModule,
        PhoneNumberInputDirective,
    ],
    providers: [GlobalService]
})
export class SharedModule {

 }
