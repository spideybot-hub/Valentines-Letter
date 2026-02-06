document.addEventListener('DOMContentLoaded', function() {
    const envelope = document.getElementById('envelope');
    const letterContent = document.getElementById('letterContent');
    const closeBtn = document.getElementById('closeBtn');
    const instruction = document.getElementById('instruction');

    // Open letter when envelope is clicked
    envelope.addEventListener('click', function() {
        envelope.classList.add('open');
        letterContent.classList.add('show');
        instruction.style.opacity = '0';
        instruction.style.pointerEvents = 'none';
        createHearts();
    });

    // Close letter
    closeBtn.addEventListener('click', function() {
        letterContent.classList.remove('show');
        envelope.classList.remove('open');
        instruction.style.opacity = '1';
        instruction.style.pointerEvents = 'auto';
    });

    // Close letter when clicking outside
    letterContent.addEventListener('click', function(e) {
        if (e.target === letterContent) {
            letterContent.classList.remove('show');
            envelope.classList.remove('open');
            instruction.style.opacity = '1';
            instruction.style.pointerEvents = 'auto';
        }
    });

    // Create floating hearts
    function createHearts() {
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.textContent = '❤️';
                heart.className = 'heart';
                heart.style.left = Math.random() * window.innerWidth + 'px';
                heart.style.top = window.innerHeight + 'px';
                document.body.appendChild(heart);
                
                setTimeout(() => heart.remove(), 4000);
            }, i * 100);
        }
    }
});
