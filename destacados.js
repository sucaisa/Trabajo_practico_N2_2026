const tarjetas = document.querySelectorAll('.card');
const contadorSpan = document.getElementById('contador-seleccion');

tarjetas.forEach(tarjeta => {
    tarjeta.addEventListener('click', () => {
        tarjeta.classList.toggle('selected');
        const seleccionadas = document.querySelectorAll('.card.selected').length;
        contadorSpan.textContent = seleccionadas;
    });
});