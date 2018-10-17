$(document).ready(function(){
    $(".page-link").click(function() {
        console.log("Page link clicked.")
        var anchor = $(this).attr("dest");
        $("html, body").animate(
            {
                scrollTop: $("#" + anchor).offset().top
            }, 400
        );
    });
});