document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.glass-card');
    const container = document.querySelector('.container');

    // 3D Tilt Effect on Mouse Move
    container.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    // Reset on Mouse Leave
    container.addEventListener('mouseleave', () => {
        card.style.transform = `rotateY(0deg) rotateX(0deg)`;
        card.style.transition = 'transform 0.5s ease';
    });

    // Remove transition on enter to make movement smooth
    container.addEventListener('mouseenter', () => {
        card.style.transition = 'none';
    });

    // Button interactions
    const btn = document.getElementById('getStartedBtn');
    btn.addEventListener('click', () => {
        // Add a ripple effect or simple alert for demo
        btn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            btn.style.transform = 'scale(1)';
            alert('Welcome! / مرحباً بك!');
        }, 150);
    });
});
