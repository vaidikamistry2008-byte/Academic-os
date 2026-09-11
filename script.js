
// Get all role buttons
const roleButtons = document.querySelectorAll(".roles button");

// Get input fields
const idInput = document.querySelector("#userId");
const passwordInput = document.querySelector("#password");

// Get login button
const loginButton = document.querySelector(".login-btn");

// Selected role
let selectedRole = "";


// =========================
// ROLE SELECTION
// =========================

roleButtons.forEach(button => {

    button.addEventListener("click", function () {

        // Remove active class from all buttons
        roleButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Add active class to clicked button
        this.classList.add("active");

        // Save selected role
        selectedRole = this.textContent.trim();

    });

});


// =========================
// LOGIN
// =========================

loginButton.addEventListener("click", function () {

    const userId = idInput.value.trim();
    const password = passwordInput.value.trim();


    // Check role
    if (selectedRole === "") {

        alert("Please select your role.");

        return;
    }


    // Check ID and password
    if (userId === "" || password === "") {

        alert("Please enter your ID and password.");

        return;
    }


    // Open dashboard according to role

    if (selectedRole === "Student") {

       window.location.href = "student.html";

    }

    else if (selectedRole === "Faculty") {

        window.location.href = "faculty.html";

    }

    else if (selectedRole === "Admin") {

        window.location.href = "admin.html";

    }

});