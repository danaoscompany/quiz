$(document).ready(function() {
    /*var isFirefox = typeof InstallTrigger !== 'undefined';
    if (!isFirefox) {
        window.location.href = "http://ilatih.com/quiz/browsernotsupported.html";
        return;
    }*/
    $.ajax({
        type: 'GET',
        url: PHP_PATH+'check-session.php',
        dataType: 'text',
        cache: false,
        success: function(a) {
            if (a == "0") {
            } else {
                window.location.href = "http://ilatih.com/quiz";
            }
        },
        error: function(a, b, c) {
            alert(b+' '+c);
        }
    });
});