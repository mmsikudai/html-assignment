// ========================================
// PCR WHIMSICAL SHOP - JAVASCRIPT
// ========================================


// ========================================
// 1. WELCOME MESSAGE
// ========================================

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


        if (
            name == "" ||
            email == "" ||
            product == "" ||
            message == ""
        ) {

            event.preventDefault();

            if (formMessage) {

                formMessage.innerHTML =
                    "⚠️ Please complete all the required fields.";

                formMessage.style.color = "red";

            } else {

                alert("Please complete all the required fields.");

            }

        } else {

            event.preventDefault();

            if (formMessage) {

                formMessage.innerHTML =
                    "✨ Thank you, " + name +
                    "! Your order for " + product +
                    " has been submitted.";

                formMessage.style.color = "#c21875";

            } else {

                alert(
                    "✨ Thank you, " + name +
                    "! Your order has been submitted."
                );

            }

            form.reset();

        }

    });

}


// ========================================
// 3. SHOW / HIDE SHOP INFORMATION
// ========================================

function showInfo() {

    let info = document.getElementById("shopInfo");

    if (info) {

        if (info.style.display == "none" ||
            info.style.display == "") {

            info.style.display = "block";

        } else {

            info.style.display = "none";

        }

    }

}


// ========================================
// 4. CHANGE TAROT CARD COLOUR
// ========================================

function changeColour() {

    let card1 = document.getElementById("tarotCard1");
    let card2 = document.getElementById("tarotCard2");

    if (card1 && card2) {

        // Change cards to black
        card1.style.backgroundColor = "black";
        card2.style.backgroundColor = "black";

        // Change text to white
        card1.style.color = "white";
        card2.style.color = "white";

        card1.querySelector("h2").style.color = "white";
        card2.querySelector("h2").style.color = "white";

        card1.querySelector("p").style.color = "white";
        card2.querySelector("p").style.color = "white";

    }

}


// ========================================
// 5. INCENSE PRODUCT SELECTION
// ========================================

function showProductMessage(productName) {

    alert(
        "✨ " + productName +
        " has been selected! " +
        "You can place your order through the Contact page."
    );

}