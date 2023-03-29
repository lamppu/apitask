const { Model } = require('objection');

class PostalCode extends Model {
    static get tableName() {
        return 'PostalCodes';
    }

    static get idColumn() {
        return 'postalCode';
    }

    static get relationMappings() {
        const Company = require('./company');

        return {
            companies: {
                relation: Model.ManyToManyRelation,
                modelClass: Company,
                join: {
                    from: 'PostalCodes.postalCode',
                    through: {
                        from: 'PostalCodes_Companies.postalCodeId',
                        to: 'PostalCodes_Companies.companyId'
                    },
                    to: 'Companies.id'
                }
            }
             
        }
    }
}

module.exports = PostalCode;