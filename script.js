document.addEventListener('DOMContentLoaded', function() {
    var curtainLeft = document.getElementById('curtainLeft');
    var curtainRight = document.getElementById('curtainRight');

    setTimeout(function() {
        curtainLeft.style.transform = 'translateX(-100vw)';
        curtainRight.style.transform = 'translateX(100vw)';
    }, 1000);
});
function replayAnimation() {
    window.location.reload();
}
