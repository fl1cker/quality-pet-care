import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { WelcomeComponent } from './welcome.component';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

@NgModule({
    imports: [
        SharedModule,
        WelcomeRoutingModule,
    ],
    declarations: [
        WelcomeComponent,
        NavigationBarComponent
    ],
    exports: [],
})
export class WelcomeModule { }
