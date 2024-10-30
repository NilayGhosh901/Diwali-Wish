function showWish() {
    const wishes = [
        "May your Diwali be filled with sweet moments and beautiful memories, from Nilay!",
        "Wishing you a Diwali full of love, laughter, and prosperity, with warm wishes from Nilay!",
        "Hope this Diwali brings you lots of joy and sparkle! Happy Diwali from Nilay!",
        "May the lights of Diwali fill your home with happiness and success, best wishes from Nilay!",
        "Celebrate this Diwali with a heart full of gratitude and love. Wishing you all the best - Nilay!"
    ];

    const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
    document.getElementById('wish').textContent = randomWish;
}

function launchFireworks() {
    showWish();
    startContinuousFireworks();
}

function startContinuousFireworks() {
    // Run fireworks every 2 seconds
    setInterval(() => {
        playFireworksSound();
        createFireworks();
    }, 2000);
}

function playFireworksSound() {
    const sound = document.getElementById('fireworks-sound');
    sound.currentTime = 0; // Reset to start
    sound.play();
}

function createFireworks() {
    const fireworksContainer = document.getElementById('fireworks-container');

    // Create multiple firework bursts
    for (let i = 0; i < 3; i++) { // Create 3 bursts
        const firework = document.createElement('div');
        firework.classList.add('firework');
        firework.style.left = Math.random() * 100 + 'vw';
        firework.style.top = Math.random() * 100 + 'vh';
        firework.style.backgroundColor = getRandomColor();
        firework.style.animationDelay = `${Math.random()}s`;
        fireworksContainer.appendChild(firework);

        // Create smaller particles for explosion effect
        createParticles(firework.style.left, firework.style.top);
    }

    // Remove fireworks after animation
    setTimeout(() => {
        fireworksContainer.innerHTML = '';
    }, 1500);
}

function createParticles(left, top) {
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.classList.add('firework');
        particle.style.left = left;
        particle.style.top = top;
        particle.style.backgroundColor = getRandomColor();
        particle.style.width = '4px';
        particle.style.height = '4px';
        particle.style.animation = `explode 1s ease-out forwards`;
        particle.style.animationDelay = `${Math.random()}s`;
        particle.style.transform = `translate(${(Math.random() - 0.5) * 100}px, ${(Math.random() - 0.5) * 100}px)`;

        document.getElementById('fireworks-container').appendChild(particle);
    }
}

function getRandomColor() {
    const colors = ['#ff4a4a', '#ffdd4a', '#4aff4a', '#4a7fff', '#ff9f4a'];
    return colors[Math.floor(Math.random() * colors.length)];
}
