import { NgModule } from '@angular/core';
import { SignInComponent } from './sign-in/sign-in.component';
import { AccountRoutingModule } from './account-routing.module';

@NgModule({
    declarations: [SignInComponent],
    imports: [AccountRoutingModule],
    exports: []
})
export class AccountModule { }
