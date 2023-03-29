/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .dropTableIfExists('PostalCodes_Companies')
    .dropTableIfExists('Companies')
    .dropTableIfExists('PostalCodes')
    .createTable('PostalCodes', function (table) {
        table.string('postalCode', 5).primary();
        table.string('city');
    })
    .createTable('Companies', function (table) {
        table.string('businessId').primary();
        table.string('name');
        table.date('registrationDate');
        table.string('companyForm');
        table.string('detailsUri');
    })
    .createTable('PostalCodes_Companies', function (table) {
        table.increments('id').primary()

        table.string('postalCodeId').references('PostalCodes.postalCode').onDelete('CASCADE').index();
        table.string('companyId').references('Companies.businessId').onDelete('CASCADE').index();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('PostalCodes_Companies')
    .dropTableIfExists('Companies')
    .dropTableIfExists('PostalCodes');
};
