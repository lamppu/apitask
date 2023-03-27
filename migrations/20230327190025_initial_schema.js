/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('PostalCodes', function (table) {
        table.string('postalCodeId', 5).primary();
        table.string('city');
    })
    .createTable('Companies', function (table) {
        table.string('businessId').primary();
        table.date('registrationDate');
        table.string('companyForm');
        table.string('detailsUri');
        table.string('postalCode', 5);
        table.foreign('postalCode').references('PostalCodes.postalCodeId');
        table.index('postalCode', 'idx_postalCode');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .dropTable("Companies")
    .dropTable("PostalCodes");
};
