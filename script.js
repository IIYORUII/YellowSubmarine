document.addEventListener("DOMContentLoaded", function () {
    const surpriseBox = document.getElementById('surprise-box');

    // Al hacer clic en la cajita, redirige a la segunda pantalla
    surpriseBox.addEventListener('click', function () {
        window.location.href = './main.html';
    });
});
