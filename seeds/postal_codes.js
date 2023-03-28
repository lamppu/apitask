/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('PostalCodes').del();

  const postalCodes = [
    {postalCodeId: '02100', city: 'Espoo'},
    {postalCodeId: '00140', city: 'Helsinki'},
    {postalCodeId: '00930', city: 'Helsinki'},
    {postalCodeId: '00710', city: 'Helsinki'},
    {postalCodeId: '01730', city: 'Vantaa'},
    {postalCodeId: '00500', city: 'Helsinki'},
    {postalCodeId: '01760', city: 'Vantaa'},
    {postalCodeId: '01690', city: 'Vantaa'},
    {postalCodeId: '00510', city: 'Helsinki'},
    {postalCodeId: '00180', city: 'Helsinki'}
  ];

  await knex('PostalCodes').insert(postalCodes);
};
