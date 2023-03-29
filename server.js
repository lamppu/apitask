const express = require('express');
const db = require('./db');
const { Model } = require('objection');
const PostalCode = require('./models/postal_code');

Model.knex(db);

const app = express();

app.get('/postal_codes/:postalcode/companies', async (req, res) => {
    let postalCode = req.params.postalcode;

    //Validating postal code
    if(postalCode.length === 5 && /\d{5}/.test(postalCode)) {
        const postalCodeObj = await PostalCode.query().findById(postalCode);
    
        if (postalCodeObj) {
            const companies = await postalCodeObj.$relatedQuery('companies');
            return res.status(200).json(companies);
        } else {
            return res.status(404).json({"message": "No data found for selected postal code: " + postalCode});
        }
    } else {
        return res.status(404).json({"message": "Please provide a valid postal code"});
    }
    
    
    
});

app.listen(3000, () => {
    console.log('Server listening on 3000');
})