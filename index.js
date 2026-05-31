const meriendas = ["Mate con bizcochitos", "Café con medialunas", "Té con tostadas", "Chocolatada con alfajor", "Yogur con cereales"];
const contenedorLista = document.getElementById('lista-meriendas');
const btnContar = document.getElementById('btn-contar');
const resultadoContador = document.getElementById('resultado-contador');

let htmlLista = '<ul>';
meriendas.forEach(merienda => { htmlLista += `<li>${merienda}</li>`; });
htmlLista += '</ul>';
contenedorLista.innerHTML = htmlLista;

btnContar.addEventListener('click', () => {
    resultadoContador.textContent = `Actualmente ofrecemos ${meriendas.length} opciones en nuestro menú.`;
});