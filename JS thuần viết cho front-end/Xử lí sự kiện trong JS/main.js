document.addEventListener("DOMContentLoaded",function() {
    var x1 = document.getElementsByClassName('n1');
    x1[0].onclick = function() {
        console.log("Bạn vừa click vào nút 1");
        x1[0].classList.add('down');
    }

},false);



