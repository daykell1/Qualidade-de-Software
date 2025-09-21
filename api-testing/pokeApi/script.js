// Selecionando os elementos HTML pelos novos IDs
const pokemonNameEl = document.getElementById('pokemon-name');
const pokemonPicEl = document.getElementById('pokemon-pic');
const pokemonNumberEl = document.getElementById('pokemon-number');
const pokemonTypeEl = document.getElementById('pokemon-type');
const pokemonInput = document.getElementById('pokemon-input');
const searchButton = document.getElementById('search-btn');

// Função assíncrona para buscar os dados do Pokémon na API
async function fetchPokemon(pokemonNameOrId) {
    // Exibe "Carregando..." enquanto a busca é feita
    pokemonNameEl.textContent = 'Carregando...';
    pokemonPicEl.style.opacity = '0.5'; // Deixa a imagem mais clara

    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId.toLowerCase()}`;
        const response = await fetch(url);

        // Verifica se a resposta foi bem-sucedida (status 200)
        if (!response.ok) {
            throw new Error('Pokémon não encontrado!');
        }

        const data = await response.json();

        // Atualiza a interface com os dados do Pokémon
        pokemonNameEl.textContent = data.name;
        pokemonPicEl.src = data.sprites.front_default;
        pokemonPicEl.alt = `Imagem de ${data.name}`;
        pokemonNumberEl.textContent = `Número: #${data.id}`;

        // Obtém e exibe os tipos do Pokémon
        const types = data.types.map(typeInfo => typeInfo.type.name);
        pokemonTypeEl.textContent = `Tipo: ${types.join(', ')}`;
        pokemonPicEl.style.opacity = '1'; // Restaura a opacidade da imagem
    } catch (error) {
        console.error('Erro:', error);
        pokemonNameEl.textContent = 'Pokémon não encontrado!';
        pokemonPicEl.src = ''; // Limpa a imagem
        pokemonPicEl.alt = 'Imagem não disponível';
        pokemonNumberEl.textContent = '';
        pokemonTypeEl.textContent = '';
        pokemonPicEl.style.opacity = '1';
    }
}

// Evento de clique no botão de busca
searchButton.addEventListener('click', () => {
    const inputValue = pokemonInput.value.trim();
    if (inputValue) {
        fetchPokemon(inputValue);
    }
});

// Evento para a tecla 'Enter' no campo de busca
pokemonInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const inputValue = pokemonInput.value.trim();
        if (inputValue) {
            fetchPokemon(inputValue);
        }
    }
});

// Carrega um Pokémon padrão (Pikachu) ao carregar a página
fetchPokemon('pikachu');