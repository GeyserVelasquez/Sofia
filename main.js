no.addEventListener('mouseenter', function teleport() {
    var Xmax=400;
    var Xmin=-750;
    var Ymax=240;
    var Ymin=-150;
    var x = Math.floor((Math.random() * (Xmax - Xmin + 1 )) + Xmin);
    var y = Math.floor((Math.random() * (Ymax - Ymin + 1 )) + Ymin);
    console.log(x, y);
    var no = document.getElementById('no');
    // no.style.transform = 'translate(450px,-300px)';
    no.style.transform = 'translate(' + x + 'px,' + y + 'px)';
})

no.addEventListener('click', function prueba() {
    var Xmax=400;
    var Xmin=-750;
    var Ymax=240;
    var Ymin=-150;
    var x = Math.floor((Math.random() * (Xmax - Xmin + 1 )) + Xmin);
    var y = Math.floor((Math.random() * (Ymax - Ymin + 1 )) + Ymin);
    console.log(x, y);
    var no = document.getElementById('no');
    // no.style.transform = 'translate(450px,-300px)';
    no.style.transform = 'translate(' + x + 'px,' + y + 'px)';
})