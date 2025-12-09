document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Entrance Animation
    // We select the main card and animate it in
    const card = document.querySelector('.card');
    card.style.transition = 'all 1s cubic-bezier(0.22, 1, 0.36, 1)';
    
    // Slight delay to ensure CSS loads
    setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, 100);

    // 2. Staggered Link Animation
    // Animates the buttons one by one for a premium feel
    const links = document.querySelectorAll('.link-item');
    links.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.transform = 'translateY(20px)';
        link.style.transition = 'all 0.5s ease';
        
        setTimeout(() => {
            link.style.opacity = '1';
            link.style.transform = 'translateY(0)';
        }, 300 + (index * 100)); // Stagger delay
    });

    // 3. Footer Text with Typing Animation
    // Types out the text character by character, then repeats
    function typeText() {
        const timeElement = document.getElementById('local-time');
        const text1 = 'echo por MODO';
        const text2 = 'a tu MODO';
        let currentText = text1;
        let isFirstText = true;
        let index = 0;
        
        function type() {
            if (index < currentText.length) {
                const displayText = currentText.substring(0, index + 1);
                timeElement.innerHTML = displayText + '<span class="typing-cursor">|</span>';
                index++;
                setTimeout(type, 80); // Typing speed (80ms per character)
            } else {
                // Wait a bit, then clear and switch to next text
                setTimeout(() => {
                    index = 0;
                    // Clear text
                    timeElement.innerHTML = '<span class="typing-cursor">|</span>';
                    
                    // Switch to next text after clearing
                    setTimeout(() => {
                        isFirstText = !isFirstText;
                        currentText = isFirstText ? text1 : text2;
                        type(); // Start typing the next text
                    }, 300); // Short pause before starting next text
                }, 1500); // Wait 1.5 seconds before clearing
            }
        }
        
        // Start typing after a short delay
        setTimeout(type, 500);
    }

    typeText(); // Start typing animation on load

    // 4. Logo Video Playback
    // Plays video on hover or click
    const logoContainer = document.querySelector('.logo-container');
    const footerVideo = document.querySelector('.footer-video');

    if (logoContainer && footerVideo) {
        // Play video on hover
        logoContainer.addEventListener('mouseenter', () => {
            footerVideo.play();
        });

        // Pause video when mouse leaves
        logoContainer.addEventListener('mouseleave', () => {
            footerVideo.pause();
            footerVideo.currentTime = 0; // Reset to start
        });

        // Click will navigate to website (handled by anchor tag)
        // Video still plays on hover
    }
});