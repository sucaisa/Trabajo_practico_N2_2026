const elementos = [
    { nombre: "Estación de calor", categoria: "reparacion" },
    { nombre: "Multímetro digital", categoria: "reparacion" },
    { nombre: "Silla Ergonómica", categoria: "mobiliario" },
    { nombre: "Destornillador de precisión", categoria: "reparacion" },
    { nombre: "Teclado Mecánico", categoria: "periferico" },
    { nombre: "Monitor 24 pulgadas", categoria: "periferico" }
];

const contenedorItems = document.getElementById('contenedor-items');
const btnTodos = document.getElementById('btn-todos');
const btnFiltro = document.getElementById('btn-filtro');

function renderizar(array) {
    contenedorItems.innerHTML = '';
    array.forEach(item => {
        const div = document.createElement('div');
        div.className = 'item';
        div.innerHTML = `<strong>${item.nombre}</strong> <br> <small>Categoría: ${item.categoria}</small>`;
        contenedorItems.appendChild(div);
    });
}

renderizar(elementos);

btnTodos.addEventListener('click', () => renderizar(elementos));
btnFiltro.addEventListener('click', () => {
    const filtrados = elementos.filter(item => item.categoria === 'reparacion');
    renderizar(filtrados);
});