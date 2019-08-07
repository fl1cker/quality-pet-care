import { Component } from '@angular/core';

@Component({
    selector: 'qpc-navigation-bar',
    templateUrl: './navigation-bar.component.html',
    styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {
    readonly navOptions: string[] = ['Home', 'Book An Appointment', 'About Us', 'Contact Us', 'Pet Guide'];
}
