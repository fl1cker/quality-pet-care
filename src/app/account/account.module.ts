import { NgModule } from '@angular/core';
import { SignInComponent } from './sign-in/sign-in.component';
import { AccountRoutingModule } from './account-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { PhoneNumberInputDirective } from '../shared/directives/phone-number-input.directive';

@NgModule({
    declarations: [
        SignInComponent,
        SignUpComponent,
    ],
    imports: [
        AccountRoutingModule,
        ReactiveFormsModule,
        SharedModule,
    ],
})
export class AccountModule { }
