import { NgModule } from '@angular/core';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [NavigationBarComponent],
    imports: [
        CommonModule
    ],
    exports: [NavigationBarComponent]
})
export class CoreModule { }
