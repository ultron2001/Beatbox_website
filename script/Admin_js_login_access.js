function checkUser() {
    var user = document.getElementById("username_ID");
    var pass = document.getElementById("password_ID").value;
    if (user.value == "admin" && pass == "1234") {
        alert("Login Successful!");
        window.location = "admin_page_add_remove_editing.html";
    } else {
        alert("Invalid Username or Password! Try Again.");
    }

}