var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '123',
    database: 'node_fcm'
});
connection.connect();
connection.getConnection = function(fn){
    if(connection==null){
        fn("connection is null",connection);
    }
    fn("connection",connection);
}
exports.pool=connection;
