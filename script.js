$(document).ready(function() {
    // do stuff when DOM is ready
    $("#toggle-mode").on("click", function() {
        $("body").toggleClass("dark-mode");
    });
});