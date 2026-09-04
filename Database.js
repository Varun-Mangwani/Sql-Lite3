
const sql = require('better-sqlite3')

const app = express()

const db = new sql("database.db")

db.exec(`CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    password TEXT NOT NULL
)`)

module.exports = db;