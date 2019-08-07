import { NgModule } from '@angular/core';
import { MatButtonModule, MatRippleModule, MatTabsModule, MatCardModule } from '@angular/material';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatRippleModule,
        MatTabsModule,
        MatCardModule,
    ],
    exports: [
        CommonModule,
        MatButtonModule,
        MatRippleModule,
        MatTabsModule,
        MatCardModule,
    ]
})
export class SharedModule { }
