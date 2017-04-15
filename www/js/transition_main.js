$( document ).ready(function() {
    $(".menu_button").click(function(){
        console.log("button click");
        $(this).css('z-index', '99');
        $(this).animate({
            width: '100%',
            height: '100vh',
            marginTop: '0',
            marginLeft: '0'
        }, 500);
        $(this).find('p').animate({
            transition: '0.3s',
            opacity: '0'
        }, 500);

        console.log($(this).attr('class'));
        var className = $(this).attr('class');
        switch(className) {
            case 'menu_button logout':
                setTimeout(function () {
                    window.location.href = "index.html";
                }, 500);
                break;

            default:
                setTimeout(function () {
                    window.location.href = "profile.html";
                }, 500);
                break;
        }
    });
});