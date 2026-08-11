// ========================================
// PCR WHIMSICAL SHOP - JAVASCRIPT
// ========================================


// 1. WELCOME MESSAGE
// This only runs on the Home page.

if (document.getElementById("welcomeMessage")) {

    let username = prompt("Welcome to PCR Whimsical Shop! What is your name?");

    if (username != null && username.trim() != "") {

        document.getElementById("welcomeMessage").innerHTML =
        "Welcome, " + username + "! ✨ We hope you enjoy our magical collection.";

    } else {

        document.getElementById("welcomeMessage").innerHTML =
        "Welcome to PCR Whimsical Shop! ✨";

    }
}


// 2. FORM VALIDATION
// This only runs when the order form exists.

let form = document.getElementById("orderForm");

if (form) {

    form.addEventListener("submit", function(event) {

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let product = document.getElementById("product").value.trim();
        let message = document.getElementById("message").value.trim();

        if (name == "" || email == "" || product == "" || message == "") {

            alert("Please complete all the required fields.");

            event.preventDefault();

        } else {

            alert("Thank you, " + name + "! Your order has been submitted.");

        }

    });

}


// 3. SHOW / HIDE INFORMATION

function showInfo() {

    let info = document.getElementById("shopInfo");

    if (info.style.display == "none") {

        info.style.display = "block";

    } else {

        info.style.display = "none";

    }

}


// 4. CHANGE COLOUR

function changeColour() {

    let// ========================================
// PCR WHIMSICAL SHOP - JAVASCRIPT
// ========================================


// ========================================
// 1. WELCOME MESSAGE
// ========================================
// This runs on the Home page.

if (document.getElementById("welcomeMessage")) {

    let username = prompt(
        "Welcome to PCR Whimsical Shop! What is your name?"
    );


    if (username != null && username.trim() != "") {

        document.getElementById("welcomeMessage").innerHTML =
            "Welcome, " + username.trim() +
            "! ✨ We hope you enjoy our magical collection.";

    } else {

        document.getElementById("welcomeMessage").innerHTML =
            "Welcome to PCR Whimsical Shop! ✨";

    }

}



// ========================================
// 2. FORM VALIDATION
// ========================================
// This runs only when the order form exists.

let form = document.getElementById("orderForm");


if (form) {

    form.addEventListener("submit", function(event) {


        let name =
            document.getElementById("name").value.trim();


        let email =
            document.getElementById("email").value.trim();


        let product =
            document.getElementById("product").value.trim();


        let message =
            document.getElementById("message").value.trim();


        let formMessage =
            document.getElementById("formMessage");


        // Check if any required field is empty

        if (
            name == "" ||
            email == "" ||
            product == "" ||
            message == ""
        ) {

            event.preventDefault();


            formMessage.innerHTML =
                "⚠️ Please complete all the required fields.";


            formMessage.style.color = "red";


        } else {


            event.preventDefault();


            formMessage.innerHTML =
                "✨ Thank you, " + name +
                "! Your order for " + product +
                " has been submitted.";


            formMessage.style.color = "#c21875";


            form.reset();

        }

    });

}



// ========================================
// 3. SHOW / HIDE INFORMATION
// ========================================

function showInfo() {

    let info = document.getElementById("shopInfo");


    if (info.style.display == "none" ||
        info.style.display == "") {

        info.style.display = "block";

    } else {

        info.style.display = "none";

    }

}



// ========================================
// 4. CHANGE COLOUR
// ========================================

function changeColour() {

    let title = document.getElementById("title");


    if (title) {

        title.style.color = "deeppink";

        title.innerHTML =
            "✨ Magic Activated! ✨";

    }

}



// ========================================
// 5. PRODUCT SELECTION
// ========================================
// This is used by the buttons on incense.html.

function showProductMessage(productName) {

    alert(
        "✨ " + productName +
        " has been selected! " +
        "You can place your order through the Contact page."
    );

} title = document.getElementById("title");

    if (title) {

        title.style.color = "deeppink";

    }

}