document.addEventListener('DOMContentLoaded', function() {
    const envelope = document.getElementById('envelope');
    const letterContent = document.getElementById('letterContent');
    const closeBtn = document.getElementById('closeBtn');
    const instruction = document.getElementById('instruction');
    let isOpen = false;

    // Function to open letter
    function openLetter() {
        if (!isOpen) {
            isOpen = true;
            envelope.classList.add('open');
            letterContent.classList.add('show');
            instruction.style.opacity = '0';
            instruction.style.pointerEvents = 'none';
            createHearts();
        }
    }

    // Function to close letter
    function closeLetter() {
        if (isOpen) {
            isOpen = false;
            letterContent.classList.remove('show');
            envelope.classList.remove('open');
            instruction.style.opacity = '1';
            instruction.style.pointerEvents = 'auto';
        }
    }

    // Click/Touch event for envelope
    envelope.addEventListener('click', openLetter);
    envelope.addEventListener('touchend', function(e) {
        e.preventDefault();
        openLetter();
    });

    // Close button click/touch
    closeBtn.addEventListener('click', closeLetter);
    closeBtn.addEventListener('touchend', function(e) {
        e.preventDefault();
        closeLetter();
    });

    // Close letter when clicking/touching outside
    letterContent.addEventListener('click', function(e) {
        if (e.target === letterContent) {
            closeLetter();
        }
    });

    letterContent.addEventListener('touchend', function(e) {
        if (e.target === letterContent) {
            e.preventDefault();
            closeLetter();
        }
    });

    // Create floating hearts
    function createHearts() {
        const heartCount = window.innerWidth < 480 ? 5 : 10;
        for (let i = 0; i < heartCount; i++) {
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

    // Prevent body scroll when letter is open
    const style = document.createElement('style');
    const observer = new MutationObserver(function() {
        if (letterContent.classList.contains('show')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });
    observer.observe(letterContent, { attributes: true, attributeFilter: ['class'] });
});

