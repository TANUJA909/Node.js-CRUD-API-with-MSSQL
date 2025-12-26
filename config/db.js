require('dotenv').config();
const sql = require('mssql');

const config = {
  server: process.env.DB_SERVER || 'localhost',
  port: parseInt(process.env.DB_PORT) || 64340,
  database: process.env.DB_DATABASE || 'InterviewDB',
  user: process.env.DB_USER || 'apiuser',
  password: process.env.DB_PASSWORD || 'ApiPass123!',
  options: {
    encrypt: false,
    trustServerCertificate: true,
    enableArithAbort: true
  },
  connectionTimeout: 30000,
  requestTimeout: 30000
};

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to MSSQL database');
    return pool;
  })
  .catch(err => {
    console.error('Database connection failed:', err.message);
    throw err;
  });

module.exports = {
  sql,
  poolPromise
};