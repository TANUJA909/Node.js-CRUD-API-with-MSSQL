const { poolPromise, sql } = require('../config/db');

const createUser = async (name, email) => {
  const pool = await poolPromise;
  return pool.request()
    .input('name', sql.VarChar(100), name)
    .input('email', sql.VarChar(100), email)
    .query(
      'INSERT INTO Users (name, email) VALUES (@name, @email)'
    );
};

const getAllUsers = async () => {
  const pool = await poolPromise;
  return pool.request().query('SELECT * FROM Users');
};

const getUserById = async (id) => {
  const pool = await poolPromise;
  return pool.request()
    .input('id', sql.Int, id)
    .query('SELECT * FROM Users WHERE id = @id');
};

const updateUser = async (id, name, email) => {
  const pool = await poolPromise;
  return pool.request()
    .input('id', sql.Int, id)
    .input('name', sql.VarChar(100), name)
    .input('email', sql.VarChar(100), email)
    .query(
      'UPDATE Users SET name = @name, email = @email WHERE id = @id'
    );
};

const deleteUser = async (id) => {
  const pool = await poolPromise;
  return pool.request()
    .input('id', sql.Int, id)
    .query('DELETE FROM Users WHERE id = @id');
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
};
