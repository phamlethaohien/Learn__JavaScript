var a = document.querySelectorAll('.card .card-title');

for (let i = 0; i < a.length; i++) {
    if (i == 2) {
        console.log(a[i]);
        a[i].innerHTML = 'Phan tu duoc chon';
        
    }       
}
