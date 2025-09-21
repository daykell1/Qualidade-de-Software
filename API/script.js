document.getElementById('search-btn').onclick = loadpk;

async function loadpk() {
    const nomeOuId = document.getElementById('pokemon-input').value;
    
    // AQUI É O PONTO MAIS IMPORTANTE: VOCÊ USA A SUA PRÓPRIA API!
    let url = `http://localhost:3000/api/pokemons/${nomeOuId}`;
    
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error('Pokémon não encontrado!');
        }
        
        const data = await response.json();

        // Atualiza a interface com os dados da sua API
        document.getElementById('pokemon-name').innerHTML = data.name;
        document.getElementById('pokemon-number').innerHTML = `ID: ${data.id}`;
        document.getElementById('pokemon-pic').setAttribute('src', data.image);

    } catch (error) {
        console.error("Erro: " + error);
        document.getElementById('pokemon-name').innerHTML = 'Pokémon não encontrado.';
        document.getElementById('pokemon-number').innerHTML = '';
        document.getElementById('pokemon-pic').setAttribute('src', '');
    }
}