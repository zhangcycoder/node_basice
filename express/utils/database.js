const mySql = require('mysql2')

// 创建连接池
const pool = mySql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'jsplusplus',
    password: "zxc123456",
})

module.exports = pool.promise();