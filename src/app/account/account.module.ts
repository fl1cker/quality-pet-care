import { NgModule } from '@angular/core';
import { SignInComponent } from './sign-in/sign-in.component';
import { AccountRoutingModule } from './account-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

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
