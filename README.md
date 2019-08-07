# quality-pet-care
Angular application for a mock veterinary clinic

# To Do

#Organization

## Functionality?
    Not Logged In
    1) Book an appointment -- Get fresh appointments whenever it's clicked
        MANUAL
        a) calendar with available dates
        b) dropdown with available times
        c) radial with doctor name
        OR
        AUTOMATIC -- these buttons auto populate the MANUAL fields
        a) Radial for First Available
            i) calculate soonest date and soonest time
        b) button for next available
            i) calculate soonest date and soonest time that is after the previous one.  Easiest way would be to sort the person, date, time list and First available/next just iterates the list -- could use a generator for this.
    2) Get directions (google maps)
        a) Display location on google maps embedded in the site
        b) if clicked, redirect to maps.google.com with the location selected
    3) Create an account
        a) email
        b) Password
        c) Name 
        d) Address
        e) Phone Number
    4) Log In
        a) email
        b) password

    Logged In
    1) Add pets to you profile
        a) Name
        b) Birthday
        c) Pet Type (cat/dog/etc)
        d) Tempermant
    2) Book an appointment (auto populate pet information)
       a) If you override any prepopulated fields -- would you like to automatically update your profile with these changes?
    3) View Lab Results, Bills, and Doctors Notes -- 
        a) pull documents
    4) Live Chat -- LUIS Chatbot?
        a) stretch goal.
    5) Log out

## UI Structure
    Header
        Company Name
        Welcome
        Book An Appointment 
        About Us
        Contact Us
        Log In Button / User Profile Component
    Body
    Footer
