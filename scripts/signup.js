const PHP_PATH = "http://ilatih.com/quiz/scripts/";

$(document).ready(function() {
    /*var isFirefox = typeof InstallTrigger !== 'undefined';
    if (!isFirefox) {
        window.location.href = "http://ilatih.com/quiz/browsernotsupported.html";
        return;
    }*/
    $("#remember-me").on("click", function() {
        var checked = $("#remember-me-checkbox").prop("checked");
        checked = !checked;
        $("#remember-me-checkbox").prop("checked", checked);
    });
    $.ajax({
        type: 'GET',
        url: PHP_PATH+'check-session.php',
        dataType: 'text',
        cache: false,
        success: function(a) {
            if (a == 0) {
                // Logged in
                window.location.href = "home.html";
            }
        }
    });
});

function login() {
    window.location = "login.html";
}

function signup() {
    window.location = "signup.html";
}

function signupAsUser() {
    $("#error").html("");
    $("#error").css("display", "none");
    $("#signup-form").css("height", "330px");
    $("#signup").css("margin-top", "20px");
    var email = $("#email").val();
    var password = $("#password").val();
    if (email == '' || password == '') {
        return;
    }
    var rememberMe = $("#remember-me-checkbox").prop("checked");
    $.ajax({
        type: 'GET',
        url: PHP_PATH+'signup.php',
        data: {'email': email, 'password': password, 'remember-me': rememberMe},
        dataType: 'text',
        cache: false,
        success: function(a) {
            if (a == 0) {
                // Success
                window.location = "home.html";
            } else if (a == -1) {
                // User exists
                $("#signup-form").css("height", "350px");
                $("#error").html("Email sudah digunakan");
                $("#error").css("display", "block");
                $("#signup").css("margin-top", "10px");
            }
        },
        error: function(a, b, c) {
            alert(b+' '+c);
        }
    });
}