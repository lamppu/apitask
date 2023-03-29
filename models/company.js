const { Model } = require('objection');

class Company extends Model {
    static get tableName() {
        return 'Companies';
    }

    static get idColumn() {
        return 'businessId';
    }

    static get relationMappings() {
        const PostalCode = require('./postal_code');

        return {
            postalcodes: {
                relation: Model.ManyToManyRelation,
                modelClass: PostalCode,
                join: {
                    from: 'Companies.businessId',
                    through: {
                        from: 'PostalCodes_Companies.companyId',
                        to: 'PostalCodes_Companies.postalCodeId'
                    },
                    to: 'PostalCodes.postalCode'
                }
            }
        }
    }
}

module.exports = Company;