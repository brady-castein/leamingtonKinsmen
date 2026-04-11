document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.gallery-grid img');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    let currentIndex = 0;

    function getVisibleCount() {
        return window.innerWidth <= 768 ? 1 : 3;
    }

    function updateGallery() {
        const visibleCount = getVisibleCount();
        images.forEach((img, i) => {
            img.style.display = (i >= currentIndex && i < currentIndex + visibleCount) ? 'block' : 'none';
        });
    }

    nextBtn.onclick = function () {
        if (currentIndex + getVisibleCount() < images.length) {
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

    window.addEventListener('resize', updateGallery);
    updateGallery();
});