import mysql from "mysql"

export const db = mysql.createConnection({

    host: "172.18.0.3",
    user: "root",
    password: "MinhaSenha",
    database: "social"

})