import { NgModule } from '@angular/core';
import { SignInComponent } from './sign-in/sign-in.component';
import { AccountRoutingModule } from './account-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
    declarations: [
        SignInComponent,
        SignUpComponent,
    ],
    imports: [AccountRoutingModule],
})
export class AccountModule { }
