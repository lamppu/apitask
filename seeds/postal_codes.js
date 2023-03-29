/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('PostalCodes').del();

  const postalCodes = [
    {postalCode: '02100', city: 'Espoo'},
    {postalCode: '00140', city: 'Helsinki'},
    {postalCode: '00930', city: 'Helsinki'},
    {postalCode: '00710', city: 'Helsinki'},
    {postalCode: '01730', city: 'Vantaa'},
    {postalCode: '00500', city: 'Helsinki'},
    {postalCode: '01760', city: 'Vantaa'},
    {postalCode: '01690', city: 'Vantaa'},
    {postalCode: '00510', city: 'Helsinki'},
    {postalCode: '00180', city: 'Helsinki'}
  ];

  await knex('PostalCodes').insert(postalCodes);
};
