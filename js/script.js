/** 
 *  Unicorn Kingdom JS
 * 
*/

// Document.ready     
$(function() {

    // Declare an empty array which will hold our user data objects
    const userProfiles = [];

    // Declare an empty object to store our user input properties and values
    const userInputtedValues = {};

    // Cache selectors
    const $container = $(".unicorn-kingdom-wrapper .container");
    const $unicornMane = $(".unicorn .mane");
    const $headerElement = $("header");

    // Add the new user properties and values to our object
    // Then push that object to the user profiles array 
    function addNewUserData() {

        // We assign a form input value to each variable
        newUserFirstName = $("#firstName").val();
        newUserEmail = $("#email").val();
        newUserPassword = $("#password").val();
        newUserUnicornName = $("#unicornName").val(); 
        newUserUnicornHood = $("#unicornHood").val();
        newUserUnicornColour = $("#unicornColour").val();
        newUserUnicornFood = $("#unicornFood").val();
        newUserUnicornPower = $("#unicornPower").val();

        // We use namespacing to insert the properties and corresponding values into our user data object
        userInputtedValues.firstName = newUserFirstName;
        userInputtedValues.email = newUserEmail;
        userInputtedValues.password = newUserPassword;
        userInputtedValues.unicornName = newUserUnicornName;
        userInputtedValues.unicornHood = newUserUnicornHood;
        userInputtedValues.unicornColour = newUserUnicornColour;
        userInputtedValues.unicornFood = newUserUnicornFood;
        userInputtedValues.unicornPower = newUserUnicornPower;

        // We use the .push() method to add each user data object to the end of the user profiles array
        userProfiles.push(userInputtedValues);

    } // addNewUserData();

    
    function extractUserProfileInfo() {

        // Loop through the array and pull the values from the properties inside the user data objects
        userProfiles.forEach(function( userProfile ) {
            memberName = userProfile.firstName;
            memberEmail = userProfile.email;
            memberPassword = userProfile.password;
            memberUnicornName = userProfile.unicornName;
            memberUnicornHood = userProfile.unicornHood;
            memberUnicornColour = userProfile.unicornColour;
            memberUnicornFood = userProfile.unicornFood;
            memberUnicornPower = userProfile.unicornPower;
        });
    } // extractUserProfileInfo();

    // Build the dashboard
    function buildDashboard() {

        // Switch from the form container to dashboard container
        $container.removeClass("form-container");
        $container.addClass("dashboard-container");

        // Hide registration form
        $(".unicorn-form").addClass("hide");

        // Show user info sidebar
        $(".user-info-sidebar").removeClass("hide");

        // Show unicorn SVG
        $(".unicorn").removeClass("hide");

        // Build dashboard header with updated title, and logout button
        $headerElement.hide().html(`
            <div>
                <h1>Hi ${memberName}, welcome to Unicorn Kingdom</h1>
            </div>
            <div>
                <a id="logout" href="#" title="Logout from your Dashboard">Logout</a>    
            </div>
        `).fadeIn( 1000 );

        // Create user info sidebar heading
        $(".user-info-sidebar--heading").hide().html(`
            <h2 class="user-info-sidebar--heading">${memberName}'s Unicorn Profile</h2>
        `).delay( 500 ).fadeIn( 500 );

        // Create user info sidebar content using dynamic input values from the user
        $(".user-info-sidebar--list").hide().html(`
            <li>This is ${memberUnicornName}!</li>
            <li>${memberUnicornName}'s Hood is ${memberUnicornHood}</li>
            <li>${memberUnicornName}'s Colour is ${memberUnicornColour}</li>
            <li>${memberUnicornName}'s Fav Food is ${memberUnicornFood}</li>  
            <li>${memberUnicornName}'s Magical Power is ${memberUnicornPower}</li>
        `).delay(500).fadeIn(1000);

        // Conditional statement which checks which value was chosen from the select dropdown in the registration form, and adds the corresponding CSS class to the SVG unicorn
        if ( memberUnicornColour === "Violet" ) {

            // Violet class
            $unicornMane.addClass("mane-violet");

        } else if ( memberUnicornColour === "Turquoise" ) {
            
            // Turquoise class
            $unicornMane.addClass("mane-turquoise");

        } else if ( memberUnicornColour === "Cornflower Blue" ) {

            // Cornflower Blue class
            $unicornMane.addClass("mane-cornflower-blue");

        } else {

            // Hot Pink class
            $unicornMane.addClass("mane-hot-pink");

        }

        // CSS colour randomizer using an array containing all proper CSS colour names.
        // Removed white
        const colourNames = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","DarkOrange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","RebeccaPurple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","WhiteSmoke","Yellow","YellowGreen"];

        // These are the CSS classes assigned to the specific parts of the unicorn SVG we're targeting
        const $unicornClasses = $('.hoof, .star');

        // This swaps out the SVG fill colour randomly using the Math() object
        // We use setInterval and some CSS transitions on the .hoof and .star classes to smoothly transition in a stepped fashion through each colour in the array.
        setInterval(function() {

            // Random colour generator
            let randomColour = colourNames[Math.floor(Math.random() * colourNames.length)];

            // Inline CSS is bad, I know, but this looks awesome!
            $unicornClasses.css('fill', randomColour);

        }, 1500); // 1.5s intervals

    } // buildDashboard();

    function logoutDashboard() {

        // Logout button click event
        $("#logout").on("click", function() {

            // Hide header
            $headerElement.hide().fadeOut( 1000 );

            // Swap container classes 
            $container.removeClass("dashboard-container");
            $container.addClass("form-container").fadeIn( 800 );

            // Show login form
            $(".login-form").removeClass("hide");

            // Hide dashboard content
            $(".user-info-sidebar, .unicorn").addClass("hide");
    
        });

    } // logoutDashboard();

    function loginExistingUser() {

        // Login form .submit() function
        $( "#loginForm" ).submit(function( event ) {

            event.preventDefault();

            const loginEmail = $("#existingEmail").val();
            const loginPassword = $("#existingPassword").val();

            // Conditional statement checking if the member email/password 
            // matches the currently logging in email/password
            if ( memberEmail === loginEmail && memberPassword === loginPassword ) {

                // Build the dashboard mostly by injecting HTML, removing and adding classes to elements.
                // I'm calling this function here, as well as in the .submit() function for the registration form
                // So calling it twice!
                // There must be a better way of doing this, where the functions get looped over
                // so that I can move through the app endlessly (MORE NOTES ON THIS BELOW!!!).
                buildDashboard();

                // Hide login form
                $(".login-form").addClass("hide");

            } else if ( memberEmail !== loginEmail && memberPassword === loginPassword ) {

                // I know that normally the message would be kept vague
                // to ensure hackers don't know if the email or password is incorrect!
                // But being more verbose here was fun and more informative!
                alert("Failure! Your login email is incorrect.");

            } else if ( memberEmail === loginEmail && memberPassword !== loginPassword ) {

                alert("Failure! Your login password is incorrect.");

            } else {

                alert("Failure! Both your login email and login password are incorrect.");

            }
        });
    }

    // Using the .submit() function on the registration form
    // This calls all our functions from above, and is the real driver for this app.
    $( "#registrationForm" ).submit(function( event ) {

        // Prevents the default behaviour, stopping the browser from refreshing
        // Without this we would lose the input values and would not be able to store them in our user data object
        event.preventDefault();
        
        // Call the function that adds new user input values to our user object.
        // We can now access the array and object props and values in our .submit() function.
        addNewUserData();

        /*
        ** 
        * The extractUserProfileInfo function is meant to represent a real world scenario.
        * I would want to loop through the objects and get direct access to the property values.
        * This would expose the objects to me, so I could easily do comparison checks on logging in users to ensure they are existing users, and are using the correct login info.
        * Additionally, I can now easily use the property values, assign them to variables, and use those variables inside my dashboard for added personality and customization.
        **
        */
        extractUserProfileInfo();

        // Build the dashboard mostly by injecting HTML, removing and adding classes to elements.
        buildDashboard();

        // Logout the dashboard and switch over to the login page
        logoutDashboard();

    }); // #registrationForm .submit();

    // Login existing user if email and password matches
    loginExistingUser();

    /** 
     * Step 1: User completes registration and when they click JOIN they are auto signed in to the dashboard. 
     * Step 2: User logs out of the dashboard using the logout button, and they are taken to the login page. 
     * Step 3: User logs back in to the dashboard using the login form.
     * 
     * I am unsure of how to make a loop that will loop through the function calls
     * or something like that. Because once the user logs in via the login form, 
     * the logout button no longer works and the functionality of the app ends. 
     * How would I structure the function calls so I can loop through the app forever?
     * Creating new users, adding those user data objects to the user profiles array, accessing that array of objects and moving through the app (dashboard, login, registration, repeat repeat repeat).
     * Obviously cannot refresh the browser while playing around in the app!
     **/

}); // Document.ready