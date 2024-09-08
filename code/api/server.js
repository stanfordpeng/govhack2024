const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/api/v1/livability', (req,  res) => {
    const lga = req.query.lga;
    if (lga == 'Whitehorse') {
        return res.json({
            lga: 'Whitehorse',
            year: 2023,
            index: 8.7,
            categories: {
                healthcare: 8.9,
                education: 7.5,
                infrastructure: 9
            }
        });
    }
    if (lga == 'Wyndham') {
        return res.json({
            lga: 'Wyndham',
            year: 2023,
            index: 7.7,
            categories: {
                healthcare: 7.9,
                education: 8.5,
                infrastructure: 6.8
            }
        });
    }
    return res.status(400).json({ error: 'invalid local government area' });
});

app.post('/api/v1/generate-response', (req, res) => {
    const { prompt } = req.body;
    if (prompt) {
        return res.json({
            message: 'Current Hospitals per 100,000 population in Whitehorse is 0.87, which is well below suitable value of 1. Considering this area is going to have double the population in the next 10 years , recommendation is the enhance the bed capacity in existing hospitals and build another hospital within the next 6 years to meet the fast growing demand'
        })
    }
});

app.listen(port, () => {
    console.log(`Server Running at http://localhost:${port}/`);
});