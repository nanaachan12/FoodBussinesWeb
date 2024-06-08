// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

//klik diluar sidebar
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove('active');
    }
});

// Mengakses semua elemen dengan kelas 'menu-card'
var menuCards = document.querySelectorAll('.menu-card');

// Mengatur event listener untuk setiap elemen 'menu-card'
menuCards.forEach(function(menuCard) {
    // Mengatur event listener untuk saat mouse memasuki elemen
    menuCard.addEventListener('mouseenter', function() {
        // Menerapkan transformasi skala ketika mouse memasuki elemen
        this.style.transform = 'scale(1.1)'; // Mengubah skala menjadi 110% dari ukuran aslinya
    });

    // Mengatur event listener untuk saat mouse meninggalkan elemen
    menuCard.addEventListener('mouseleave', function() {
        // Menerapkan transformasi skala ketika mouse meninggalkan elemen
        this.style.transform = 'scale(1)'; // Mengembalikan skala ke ukuran aslinya
    });
});


