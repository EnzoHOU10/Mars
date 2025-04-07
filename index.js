const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3000;
const API_KEY = 'DEMO_KEY';
const API_URL = `https://api.nasa.gov/insight_weather/?api_key=${API_KEY}&feedtype=json&ver=1.0`;

app.use(cors());

app.get('/mars-weather', async (req, res) => {
  try {
    const response = await axios.get(API_URL);
    const data = response.data;
    const sols = data.sol_keys || [];

    const formattedData = sols.map((sol) => {
      const solData = data[sol];
      return {
        sol: sol,
        temperature: solData.AT || null,
        pressure: solData.PRE || null,
        windSpeed: solData.HWS || null,
        windDirection: solData.WD?.most_common || null,
        season: solData.Season || null,
        firstUTC: solData.First_UTC || null,
        lastUTC: solData.Last_UTC || null,
      };
    });

    res.json({ sols: formattedData });
  } catch (error) {
    console.error('Erreur lors de la récupération des données météo de Mars :', error.message);
    res.status(500).json({ error: 'Erreur lors de la récupération des données météo de Mars.' });
  }
});

app.listen(PORT, () => {
  console.log(`Serveur backend démarré sur http://localhost:${PORT}`);
});

//node index.js pour lancer le serveur dans le terminal
