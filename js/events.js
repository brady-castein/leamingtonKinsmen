document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.gallery-grid img');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const visibleCount = 3;
    let currentIndex = 0;

    function updateGallery() {
        images.forEach((img, i) => {
            img.style.display = (i >= currentIndex && i < currentIndex + visibleCount) ? 'block' : 'none';
        });
    }

    nextBtn.onclick = function () {
        if (currentIndex + visibleCount < images.length) {
            currentIndex++;
            updateGallery();
        }
    };

    prevBtn.onclick = function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateGallery();
        }
    };

    updateGallery();
});