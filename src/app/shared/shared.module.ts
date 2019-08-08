import { NgModule } from '@angular/core';
import { MatButtonModule, MatRippleModule, MatTabsModule, MatCardModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { CommonModule } from '@angular/common';

@NgModule({
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
    ]
})
export class SharedModule { }
