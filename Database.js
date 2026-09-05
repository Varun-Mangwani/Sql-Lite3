
const Database = require('better-sqlite3')

const db = Database("Database.db")

//EXECUTE THE TABLE MAKING PROCESS 
db.exec(`
        CREATE TABLE IF NOT EXISTS user(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user VARCHAR(50) NOT NULL,
            pass VARCHAR(50) NOT NULL
        )
    `);

// INSERT INTO TABLE WITH PLACEHOLDER
const insert = db.prepare(`INSERT INTO user(user,pass) VALUES(? ,?)`);

//READ / SELECT FROM TABLE AND GET DATA 
const read = db.prepare(`SELECT * FROM user`);

//INSERTING INTO DATABASE(SQLITE)
insert.run("Varun","12345");

//READ QUERY TO USER VARIABLE(DATA->USERS)
const users = read.all();

console.log(users);

