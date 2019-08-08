import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'qpc-navigation-bar',
    templateUrl: './navigation-bar.component.html',
    styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {
    isLoggedIn = false; // TODO: will become a test again User.  If User then they are logged in.  If null, then they are not.
    readonly navOptions: string[] = ['Home', 'Book An Appointment', 'About Us', 'Contact Us', 'Pet Guide'];

    constructor(private router: Router) {
        
    }

    loginClicked() {
        this.router.navigateByUrl('/account/sign-in');
    }

    logoutClicked() {
        console.log('logout clicked');
    }
}
