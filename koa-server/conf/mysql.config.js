var mysql      = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host     : 'localhost',
  user     : 'root',
  password : 'abc123',
  database : 'my_db'
})

let allServices = {
  query: (sql, values) => {
    return new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) {
          reject(err);
        } else {
          connection.query(sql, values, (err, rows) => {
            if (err) {
              reject(err);
            } else {
              resolve(rows);
            }
            connection.release();
          })
        }
      })
    })
  },
  getUserData: (name) => {
    let _sql = `select * from user where name="${name}";`;
    return allServices.query(_sql)
  },
  addUserData: (obj) => {
    let _sql = `insert into user set name="${obj.name}", password="${obj.password}";`;
    return allServices.query(_sql)
  }
}

module.exports = allServices