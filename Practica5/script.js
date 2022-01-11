var imageIndex = +0;
var images = ["1.jpg", "2.jpg", "3.jpg"]

function setSlide(n) {
    document.getElementById("image").src = images[n];
}

function prevImage() {
    imageIndex--;

    if (imageIndex < 0)
        imageIndex = 2;

    setSlide(imageIndex);
}

function nextImage() {
    imageIndex++;

    if (imageIndex > 2)
        imageIndex = 0;

    setSlide(imageIndex);
}