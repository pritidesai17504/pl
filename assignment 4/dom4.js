
const balloons = document.querySelectorAll('.balloon');
let poppedCount = 0;

balloons.forEach(balloon => {
    balloon.addEventListener('mouseover', function() {
        this.style.transition = 'opacity 0.5s ease';
        this.style.opacity = '0';
        setTimeout(() => {
            this.style.visibility = 'hidden';
            poppedCount++;
            if (poppedCount === balloons.length) {
                alert('All balloons popped! You did it!');
            }
        }, 500);
    });
});

document.getElementById('refreshButton').addEventListener('click', function() {
    balloons.forEach(balloon => {
        balloon.style.visibility = 'visible';
        balloon.style.opacity = '1';
    });
    poppedCount = 0;
});
