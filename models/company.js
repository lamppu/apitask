const { Model } = require('objection');

class Company extends Model {
    static get tableName() {
        return 'Companies';
    }

    static get relationMappings() {
        const PostalCode = require('./postal_code');

        return {
            postalCode: Model.BelongsToOneRelation,
            modelClass: PostalCode,
            join: {
                from: 'Companies.postalCode',
                to: 'PostalCodes.postalCodeId'
            }
        }
    }
}