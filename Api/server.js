require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.get('/repositories', async (req, res) => {
  try {

    const retornoGithub = await axios.get(
      'https://api.github.com/orgs/takenet/repos?per_page=100&sort=created'
    );

    const repoCsharp = retornoGithub.data.filter(repo => repo.language === 'C#');


    const reposAntigos = repoCsharp.slice(0, 5);


    const respostaFormatada = {
      itemType: "application/vnd.lime.document-select+json",
      items: reposAntigos.map(repo => ({
        header: {
          type: "application/vnd.lime.media-link+json",
          value: {
            title: repo.full_name,
            text: repo.description || "Sem descrição disponível",
            type: "image/jpeg",
            uri: repo.owner.avatar_url,

          }
        }
      }))
    };


    res.json(respostaFormatada);
  } catch (error) {
    console.error('Erro ao buscar repositórios:', error.message);
    res.status(500).json({ error: 'Erro ao buscar repositórios do GitHub' });
  }
});

app.listen(PORT, () => {
  console.log(`API funcionando em http://localhost:${PORT}`);
});
