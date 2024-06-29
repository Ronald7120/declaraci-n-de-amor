document.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.getElementById('yes');
    const noButton = document.getElementById('no');
    const message = document.getElementById('message');

    yesButton.addEventListener('click', () => {
        message.innerHTML = `
            🌟💖 **¡Sabía que me dirías que sí, Ruth Karina!** 💖🌟<br>
            Eres mi sol en los días nublados ☀️, mi refugio en los momentos difíciles 🏠, y el amor de mi vida 💑.<br>
            ¡Estoy tan emocionado de compartir mi vida contigo! 🥰✨<br>
            🌹💞 **Te quiero más de lo que las palabras pueden expresar y siempre estaré aquí para ti** 💞🌹
        `;
        noButton.style.display = 'none'; // Oculta el botón "No"
    });

    noButton.addEventListener('mouseover', () => {
        const container = noButton.closest('.container');
        const containerRect = container.getBoundingClientRect();
        const buttonRect = noButton.getBoundingClientRect();

        const maxX = containerRect.width - buttonRect.width;
        const maxY = containerRect.height - buttonRect.height;

        const newX = Math.random() * maxX;
        const newY = Math.random() * maxY;

        noButton.style.left = `${newX}px`;
        noButton.style.top = `${newY}px`;
    });
});



  