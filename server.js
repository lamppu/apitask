const express = require('express');
const db = require('./db');
const { Model } = require('objection');
const PostalCode = require('./models/postal_code');

Model.knex(db);

const app = express();

app.get('/postal_codes/:postalcode/companies', async (req, res) => {
    let postalCode = req.params.postalcode;

    const postalCodeObj = await PostalCode.query().where('postalCode', postalCode);
    
    const companies = await postalCodeObj[0].$relatedQuery('companies');
    return res.status(200).json(companies);
});

app.listen(3000, () => {
    console.log('Server listening on 3000');
})