document.addEventListener("DOMContentLoaded", function() {
    var nut = document.getElementsByClassName('nut-tong-quat');

    for (let i = 0; i < nut.length; i++) {
        nut[i].onclick = function() {
            console.log(this.getAttribute('data-password'));
        }
    }
},false)
