document.addEventListener('DOMContentLoaded', function () {
    // --- Modal de Boas-Vindas ---
    const modalBoasVindas = document.getElementById('modalBoasVindas');
    const fecharModalBoasVindasBtn = document.querySelector('.fechar-modal-boas-vindas');

    // Exibe a modal de boas-vindas assim que a página carrega
    modalBoasVindas.style.display = 'flex'; // Garante que a modal esteja visível ao carregar

    // Evento para fechar o modal de boas-vindas ao clicar no 'X'
    fecharModalBoasVindasBtn.addEventListener('click', function () {
        modalBoasVindas.style.display = 'none';
    });

    // Evento para fechar o modal de boas-vindas ao clicar fora do conteúdo
    modalBoasVindas.addEventListener('click', function (event) {
        if (event.target === modalBoasVindas) {
            modalBoasVindas.style.display = 'none';
        }
    });

    // --- Modal de Texto (descrição dos jogos) ---
    const imagensCarrossel = document.querySelectorAll('.banner .slider .item img');
    const modalTexto = document.getElementById('modalTexto');
    const textoDaImagem = document.getElementById('textoDaImagem');
    const fecharModalBtn = document.querySelector('.fechar-modal');

    // Adiciona um 'click' listener a cada imagem
    imagensCarrossel.forEach(img => {
        img.addEventListener('click', function () {
            const texto = this.getAttribute('data-texto');

            if (texto) {
                textoDaImagem.textContent = texto;
                modalTexto.style.display = 'flex';
            }
        });
    });

    // Evento para fechar o modal de texto ao clicar no 'X'
    fecharModalBtn.addEventListener('click', function () {
        modalTexto.style.display = 'none';
    });

    // Evento para fechar o modal de texto ao clicar fora do conteúdo
    modalTexto.addEventListener('click', function (event) {
        if (event.target === modalTexto) {
            modalTexto.style.display = 'none';
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    // Seleciona todas as imagens dentro dos itens do slider
    const imagensCarrossel = document.querySelectorAll('.banner .slider .item img');
    const modalTexto = document.getElementById('modalTexto');
    const textoDaImagem = document.getElementById('textoDaImagem');
    const fecharModalBtn = document.querySelector('.fechar-modal');

    // Adiciona um 'click' listener a cada imagem
    imagensCarrossel.forEach(img => {
        img.addEventListener('click', function () {
            const texto = this.getAttribute('data-texto'); // Pega o texto do atributo data-texto

            if (texto) {
                textoDaImagem.textContent = texto; // Insere o texto no parágrafo do modal
                modalTexto.style.display = 'flex'; // Torna o modal visível (usando flex para centralizar)
            }
        });
    });

    // Evento para fechar o modal ao clicar no 'X'
    fecharModalBtn.addEventListener('click', function () {
        modalTexto.style.display = 'none'; // Esconde o modal
    });

    // Evento para fechar o modal ao clicar fora do conteúdo
    modalTexto.addEventListener('click', function (event) {
        if (event.target === modalTexto) { // Se o clique foi exatamente no fundo do modal
            modalTexto.style.display = 'none'; // Esconde o modal
        }
    });
});

