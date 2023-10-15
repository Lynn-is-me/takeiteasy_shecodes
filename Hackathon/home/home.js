//left banner
const pageHome = document.getElementById("ndHome");

// Add a click event listener to the button
pageHome.addEventListener("click", function () {
  // Change the page URL when the button is clicked
  window.location.href = "../home/home.html"; // Replace "newpage.html" with the desired destination
});

const pageDis = document.getElementById("ndDiscovery");

// Add a click event listener to the button
pageDis.addEventListener("click", function () {
  // Change the page URL when the button is clicked
  window.location.href = "../discovery/discovery.html"; // Replace "newpage.html" with the desired destination
});

const pageForum= document.getElementById("ndForum");

// Add a click event listener to the button
pageForum.addEventListener("click", function () {
  // Change the page URL when the button is clicked
  window.location.href = "../forum/forum.html"; // Replace "newpage.html" with the desired destination
});

// dynamic images
const images = document.querySelectorAll('.image-container img');
let currentIndex = 0;

function showImage(index) {
    images.forEach((image, i) => {
    if (i === index) {
        image.style.display = 'inline';
    } else {
        image.style.display = 'none';
    }
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

// Start the slideshow and change images every 5 seconds
showImage(currentIndex);
setInterval(nextImage, 2000); 

