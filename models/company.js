const { Model } = require('objection');

class Company extends Model {
    static get tableName() {
        return 'Companies';
    }

    static get relationMappings() {
        const PostalCode = require('./postal_code');

        return {
            companies: {
                relation: Model.ManyToManyRelation,
                modelClass: PostalCode,
                join: {
                    from: 'Companies.id',
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