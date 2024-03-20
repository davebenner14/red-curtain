document.addEventListener('DOMContentLoaded', function() {
    replayAnimation(); // Automatically play the animation on page load
});

function replayAnimation() {
    // Reset curtain positions before starting animation
    const curtainLeft = document.getElementById('curtainLeft');
    const curtainRight = document.getElementById('curtainRight');
    curtainLeft.style.width = '50vw';
    curtainRight.style.width = '50vw';
    curtainLeft.style.left = '0';
    curtainRight.style.right = '0';

    let width = 50; // Start with the curtains closed
    const intervalTime = 20; // Time interval for the animation frame
    const totalAnimationTime = 4000; // Total time for the animation in milliseconds
    const steps = totalAnimationTime / intervalTime; // Calculate the number of steps/frames in the animation
    const widthDecrement = width / steps; // Calculate how much to decrement the width each frame

    const animate = setInterval(() => {
        width -= widthDecrement;
        if (width <= 0) {
            clearInterval(animate); // Stop the animation when fully open
            curtainLeft.style.width = '0';
            curtainRight.style.width = '0';
        } else {
            curtainLeft.style.width = `${width}vw`;
            curtainRight.style.width = `${width}vw`;
        }
    }, intervalTime);
}
