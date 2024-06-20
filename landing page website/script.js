
document.addEventListener('DOMContentLoaded', function () {
    const videoBtns = document.querySelectorAll('.vid-btn');
    const videoSlider = document.getElementById('video-slider');

    videoBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            videoBtns.forEach(btn => btn.classList.remove('active'));

            // Add active class to the clicked button
            btn.classList.add('active');

            // Get data-src attribute of the clicked button
            let src = btn.getAttribute('data-src');

            // Set the src attribute of the video element
            videoSlider.src = src;
        });
    });
});
// 
var typed = new Typed('#element', {
    strings: ['Best Service.', 'Affordable Prices.', 'Great Experience.'],
    typeSpeed: 50,
});

