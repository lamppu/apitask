const axios = require('axios');
const db = require('../db');
const { Model } = require('objection');
const PostalCode = require('../models/postal_code');
const Company = require('../models/company');

Model.knex(db);

const fetchDataAndSeedDatabase = async () => {
    const postalCodes = await PostalCode.query().select('postalCode');
    const apiUrl = 'http://avoindata.prh.fi/bis/v1';

    console.log("Fetching data and inserting to database...");
    
    for (let postalCode of postalCodes) {
        console.log("Fetching and inserting company data for postal code: " + postalCode.postalCode);
        const params = {params: {
            maxResults: '20',
            streetAddressPostCode: postalCode.postalCode
        }}

        const response = await axios.get(apiUrl, params);
        
        const companies = response.data.results;
        
        for (let company of companies) {
            const existingCompany = await Company.query().findById(company.businessId);

            if(!existingCompany) {
                const insertedCompany = await Company.query().insert(company);
                await Company.relatedQuery('postalcodes').for(insertedCompany.businessId).relate(postalCode.postalCode);
            } else {
                await Company.relatedQuery('postalcodes').for(existingCompany.businessId).relate(postalCode.postalCode);
            }

            
        }
    }
    console.log('Data fetched and inserted to database succesfully.');
    process.exit(0);
}

fetchDataAndSeedDatabase();


