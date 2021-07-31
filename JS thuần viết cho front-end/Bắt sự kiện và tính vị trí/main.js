document.addEventListener("DOMContentLoaded",function() {
    var trangthai = 'duoi200';

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 200) {
            if (trangthai == "duoi200"){
                console.log("Hello");
                trangthai = "tren200";
            };
        };
    })

}, false)
