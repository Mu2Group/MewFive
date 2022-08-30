const { Pool } = require('pg');

const PG_URI = 'postgres://mcahrrhh:ovJuTvwMAe7kvCzaFhgrjqaGjjQp1KeG@hansken.db.elephantsql.com/mcahrrhh';

const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};