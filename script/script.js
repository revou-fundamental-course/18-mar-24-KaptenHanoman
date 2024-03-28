const gambar = [
    "../bali.jpg",
    "../singapur.jpg",
    "../jepun.jpeg",
    "../surabaya.jpg",
    "../bandung.jpg",
    "../semarang.jpg"
];
let gambarIndex = 0;
const imageElement = document.querySelector('.preview img');

function showNextImage() {
    gambarIndex = (gambarIndex + 1) % gambar.length;
    const nextGambar = gambar[gambarIndex];
    imageElement.src = nextGambar;
}

setInterval(showNextImage, 2000); // Change image every 2 seconds
