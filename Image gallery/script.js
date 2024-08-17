document.addEventListener("DOMContentLoaded", function() {
    const images = [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg',
        // Add more image URLs here
    ];

    const thumbnails = document.querySelectorAll('.thumbnail');
    const galleryImage = document.getElementById('gallery-image');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    let currentIndex = 0;

    function updateGallery(index) {
        galleryImage.src = images[index];
        currentIndex = index;
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        updateGallery(currentIndex);
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateGallery(currentIndex);
    }

    prevBtn.addEventListener('click', showPrevImage);
    nextBtn.addEventListener('click', showNextImage);

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            updateGallery(index);
        });
    });
});
