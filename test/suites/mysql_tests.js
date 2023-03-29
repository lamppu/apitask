const expect = require('chai').expect;
const db = require('../../db');
const { Model } = require('objection');
const PostalCode = require('../../models/postal_code');
const Company = require('../../models/company');

Model.knex(db);

const getTables = async () => {
    return await db('information_schema.TABLES')
        .select('table_name')
        .where('table_schema', process.env.MYSQL_DB)
        .andWhereNot('table_name', 'knex_migrations')
        .andWhereNot('table_name', 'knex_migrations_lock');
}

describe('Testing mySQL database', function () {

    it('database should have three tables', async () => {
        const tables = await getTables();
        expect(tables).to.have.lengthOf(3);
    });

    it('database should have tables "PostalCodes", "Companies" and "PostalCodes_Companies"', async () => {
        const tables = await getTables();

        const first = tables[0].TABLE_NAME || tables[0].table_name;
        const second = tables[1].TABLE_NAME || tables[1].table_name;
        const third = tables[2].TABLE_NAME || tables[2].table_name;

        expect(first.toLowerCase()).to.equal('companies');
        expect(second.toLowerCase()).to.equal('postalcodes');
        expect(third.toLowerCase()).to.equal('postalcodes_companies');
    });

    it('table "PostalCodes" in database should have 10 rows', async () => {
        let response = await PostalCode.query().count();
        let count = Object.entries(response[0])[0][1];

        expect(count).to.equal(10);
    });

    it('table "Companies" in database should have less than or equal to 200 rows', async () => {
        let response = await Company.query().count();
        let count = Object.entries(response[0])[0][1];

        expect(count).to.be.at.least(20);
        expect(count).to.be.at.most(200);
    });

});