document.addEventListener('DOMContentLoaded', () => {
    const bolosGrid = document.querySelector('.bolos-grid');

    const bolos = [
        {
            nome: 'Bolo de Chocolate',
            descricao: 'Delicioso bolo de chocolate com cobertura cremosa.',
            imagem: 'imagens/bolo-de-chocolate.jpg' // Caminho local
        },
        {
            nome: 'Bolo de Cenoura',
            descricao: 'Clássico bolo de cenoura com cobertura de chocolate.',
            imagem: 'imagens/bolo-de-cenoura.jpg' // Caminho local
        },
        {
            nome: 'Bolo de Limão',
            descricao: 'Refrescante bolo de limão com raspas de limão.',
            imagem: 'imagens/bolo-de-limao.jpg' // Caminho local
        },
        {
            nome: 'Bolo de Fubá',
            descricao: 'Tradicional bolo de fubá com erva-doce.',
            imagem: 'imagens/bolo-de-fuba.jpg' // Caminho local
        }
    ];

    bolos.forEach(bolo => {
        const boloCard = document.createElement('div');
        boloCard.classList.add('bolo-card');

        boloCard.innerHTML = `
            <img src="${bolo.imagem}" alt="${bolo.nome}">
            <div class="bolo-card-content">
                <h3>${bolo.nome}</h3>
                <p>${bolo.descricao}</p>
            </div>
        `;

        bolosGrid.appendChild(boloCard);
    });

    const encomendaForm = document.getElementById('encomenda-form');

    encomendaForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telefone').value;
        const tipoBolo = document.getElementById('tipo_bolo').value;
        const detalhes = document.getElementById('detalhes').value;

        console.log('Encomenda recebida:');
        console.log('Nome:', nome);
        console.log('Email:', email);
        console.log('Telefone:', telefone);
        console.log('Tipo de Bolo:', tipoBolo);
        console.log('Detalhes:', detalhes);

        alert('Encomenda enviada com sucesso!');
        encomendaForm.reset();
    });
});