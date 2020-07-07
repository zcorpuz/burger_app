// Import the ORM to create functions that will interact with the database
const orm = require('../config/orm');

const burgers = {
    selectAll: (cb) => {
      orm.selectAll("burgers", res => cb(res));
    },
    insertOne: (col, val, cb) => {
      orm.insertOne("burgers", col, val, res => cb(res));
    },
    updateOne: (objColVals, condition, cb) => {
      orm.updateOne("burgers", objColVals, condition, res => cb(res));
    },
};

module.exports = burgers;