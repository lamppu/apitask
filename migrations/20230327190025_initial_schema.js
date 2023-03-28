/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('PostalCodes', function (table) {
        table.string('postalCode', 5).primary();
        table.string('city');
    })
    .createTable('Companies', function (table) {
        table.increments('id').primary()
        table.string('businessId');
        table.date('registrationDate');
        table.string('companyForm');
        table.string('detailsUri');
    })
    .createTable('PostalCodes_Companies', function (table) {
        table.increments('id').primary()

        table.string('postalCodeId').unsigned().references('PostalCodes.postalCode').onDelete('CASCADE').index();
        table.string('companyId').unsigned().references('Companies.id').onDelete('CASCADE').index();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .dropTable('PostalCodes_Companies')
    .dropTable('Companies')
    .dropTable('PostalCodes');
};
