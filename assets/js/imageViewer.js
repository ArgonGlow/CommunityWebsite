// Display the viewer
function openViewer() {
    // unhide the viewer
    document.getElementById('my-viewer').style.display = "inline-flex";

    // hide scroll bar when viewer is open
    document.body.style.overflow = "hidden";

}

function closeViewer() {
    // hide the viewer
    document.getElementById('my-viewer').style.display = "none";

    // enable scroll bar when viewer is closed
    document.body.style.overflow = "auto";
}

let slideIndex = 1;
// initially hide all images
showSlides(slideIndex);

// navigate through all images > prev/next
function changeSlides(n) {
    showSlides(slideIndex += n);
}

// display the image of the clicked thumbnail
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// main function > shows the desired slide
function showSlides(n) {
    const slides = document.getElementsByClassName("my-slides");

    // handle navigation on first or last slide
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    // hide all images
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // display the clicked image
    slides[slideIndex - 1].style.display = "block";

    // display index of current image
    document.getElementById('index-number').innerHTML = slides[slideIndex - 1].getAttribute('data-index-number');

    // display caption of current image
    const images = document.getElementsByClassName("image");
    
    document.getElementById('caption').innerHTML = images[slideIndex - 1].alt;
}
