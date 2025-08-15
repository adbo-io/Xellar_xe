document.addEventListener('DOMContentLoaded', function() {
    // محاكاة لتحديث المحتوى عبر YouTube API
    setInterval(() => {
        const updateInfo = document.querySelector('.update-info p:last-child');
        const now = new Date();
        updateInfo.innerHTML = `آخر تحديث: <span class="highlight">${now.toLocaleTimeString()}</span>`;
        
        // إضافة تأثير بسيط للتحديث
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.style.transform = 'translateY(-5px)';
            setTimeout(() => {
                card.style.transform = 'translateY(0)';
            }, 300);
        });
    }, 10000);
    
    // تأثيرات عند التمرير
    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideUp 0.5s ease forwards';
            }
        });
    }, { threshold: 0.1 });
    
    cards.forEach(card => {
        observer.observe(card);
    });
});

