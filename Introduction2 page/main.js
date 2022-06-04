let menuBtn = document.getElementById('menuBtn');
let sideNav = document.getElementById('sideNav');


menuBtn.addEventListener('click', function() {
    if (sideNav.style.right == "-250px"){
        sideNav.style.right = "0";
    } else {
        sideNav.style.right = "-250px";
    }
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});