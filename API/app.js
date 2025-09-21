// Importa o Express e os dados do arquivo JSON
const express = require('express');
const cors = require('cors'); // LINHA NOVA: Importa a biblioteca 'cors'
const pokemons = require('./pokemons.json');

const app = express();
const PORT = 3000;

app.use(cors()); // LINHA NOVA: Habilita o CORS para todas as requisições
app.use(express.json());

// Endpoint para obter todos os Pokémons
app.get('/api/pokemons', (req, res) => {
  res.json(pokemons);
});

// Endpoint para obter um Pokémon por ID ou nome
app.get('/api/pokemons/:id_or_name', (req, res) => {
  const { id_or_name } = req.params;

  const isId = !isNaN(id_or_name);
  const pokemon = isId 
    ? pokemons.find(p => p.id === parseInt(id_or_name))
    : pokemons.find(p => p.name.toLowerCase() === id_or_name.toLowerCase());

  if (pokemon) {
    res.json(pokemon);
  } else {
    res.status(404).json({ message: 'Pokémon não encontrado.' });
  }
});

// Endpoint para adicionar um novo Pokémon
app.post('/api/pokemons', (req, res) => {
  const newPokemon = req.body;

  if (!newPokemon.name || !newPokemon.id) {
    return res.status(400).json({ message: 'Dados inválidos. O nome e o ID são obrigatórios.' });
  }
  
  pokemons.push(newPokemon);
  
  res.status(201).json(newPokemon);
});

// Inicia o servidor na porta especificada
app.listen(PORT, () => {
  console.log(`API de Pokédex rodando em http://localhost:${PORT}`);
});