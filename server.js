const express = require('express');
const app = express();
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
const cors = require('cors');

app.use(cors());

// app.listen(process.env.PORT || 3001);

// app.locals.title = 'Adcellerant Skills Assessment';

app.get('/', (req, res) => {
    res.send('This is the Adcellerant Skills Assessment API');
});

app.get('/api/v1/ads', async (req, res) => {
    try {
        const ads = await database('data').select();

        res.status(200).json(ads);
    } catch(error) {
        res.status(500).json({ error })
    }
});

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});