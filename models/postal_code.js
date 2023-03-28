const { Model } = require('objection');

class PostalCode extends Model {
    static get tableName() {
        return 'PostalCodes';
    }

    static get relationMappings() {
        const Company = require('./company');

        return {
            companies: Model.HasManyRelation,
            modelClass: Company,
            join: {
                from: 'PostalCodes.postalCodeId',
                to: 'Companies.postalCode'
            }
        }
    }
}

module.exports = PostalCode;