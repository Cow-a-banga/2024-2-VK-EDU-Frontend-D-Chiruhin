export const addWaveEffectToChat = (chat) => {
    chat.addEventListener('click', function (event) {
        event.preventDefault();

        const ripple = document.createElement('span');
        ripple.className = 'wave';
        
        const rect = chat.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
        ripple.style.top = `${event.clientY - rect.top - size / 2}px`;
        
        chat.appendChild(ripple);

        setTimeout(() => {
            window.location.href = chat.href;
        }, 150);
    });
}