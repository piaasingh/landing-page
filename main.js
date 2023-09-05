function validateForm() {
    var name = document.forms["myForm"]["name"].value;
    var email = document.forms["myForm"]["email"].value;
    
    // Regular expression for email validation
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (name === "") {
        alert("Name must be filled out");
        return false;
    }
    if (!email.match(emailPattern)) {
        alert("Invalid email address");
        return false;
    }

    // Display user information in an alert
    alert("Name: " + name + "\nEmail: " + email);
    return false;
}