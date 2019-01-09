var menuOpened = false;

$(document).ready(function() {
});

function openMenu() {
    if (!menuOpened) {
        $("#menu").animate({
            left: "0"
        }, {
            duration: 300,
            complete: function() {
                menuOpened = true;
            }
        });
    } else {
        $("#menu").animate({
            left: "-200px"
        }, {
            duration: 300,
            complete: function() {
                menuOpened = false;
            }
        });
    }
}