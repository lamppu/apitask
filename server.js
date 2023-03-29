const express = require('express');
const db = require('./db');
const { Model } = require('objection');
const PostalCode = require('./models/postal_code');

Model.knex(db);

const app = express();

const formatDate = (date) => {
    const offset = date.getTimezoneOffset()
    date = new Date(date.getTime() - (offset*60*1000))
    return date.toISOString().split('T')[0]
}

const mapCompanies = (companies) => {
     const mappedCompanies = companies.map(company => {
        return {
            name: company.name,
            businessId: company.businessId,
            registrationDate: formatDate(company.registrationDate),
            companyForm: company.companyForm,
            detailsUri: company.detailsUri
        }
     })
     return mappedCompanies;
}

app.get('/postal_codes/:postalcode/companies', async (req, res) => {
    let postalCode = req.params.postalcode;

    if(postalCode.length === 5 && /\d{5}/.test(postalCode)) {
        const postalCodeObj = await PostalCode.query().findById(postalCode);
    
        if (postalCodeObj) {
            let companies = await postalCodeObj.$relatedQuery('companies');
            
            companies = mapCompanies(companies);
            
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

module.exports = app;