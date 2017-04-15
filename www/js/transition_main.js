$( document ).ready(function() {
    $(".menu_button").click(function(){
        console.log("button click");
        $(this).css('z-index', '99');
        $(this).animate({
            width: '100%',
            height: '100vh',
            marginTop: '0',
            marginLeft: '0'
        });
        $(this).find('p').animate({
            transition: '0.3s',
            opacity: '0'
        });
        setTimeout(function() {
            window.location.href = "profile.html";
        }, 1000);
    });
});