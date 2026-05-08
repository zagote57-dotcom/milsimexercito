const cards = document.querySelectorAll(
'.history-card, .course-box, .rule-card'
);

window.addEventListener('scroll', () => {

    cards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < window.innerHeight - 100){
            card.classList.add('show');
        }

    });

});

const heroTitle = document.querySelector('.hero h2');

setInterval(() => {

    heroTitle.style.textShadow = `0 0 ${Math.random()*50}px #00ff88`;

}, 500);

const particles = document.querySelector('.particles');

for(let i = 0; i < 40; i++){

    const particle = document.createElement('div');

    particle.style.position = 'absolute';
    particle.style.width = '3px';
    particle.style.height = '3px';
    particle.style.background = '#00ff88';
    particle.style.borderRadius = '50%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.boxShadow = '0 0 15px #00ff88';

    particles.appendChild(particle);
}