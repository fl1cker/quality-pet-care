import { Component } from '@angular/core';

@Component({
    selector: 'qpc-navigation-bar',
    templateUrl: './navigation-bar.component.html',
    styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {
    isLoggedIn = false; // TODO: will become a test again User.  If User then they are logged in.  If null, then they are not.
    readonly navOptions: string[] = ['Home', 'Book An Appointment', 'About Us', 'Contact Us', 'Pet Guide'];

    loginClicked() {
        this.toggleLogin();
    }

    logoutClicked() {
        this.toggleLogin();
    }

    toggleLogin() {
        this.isLoggedIn = !this.isLoggedIn;
    }
}
