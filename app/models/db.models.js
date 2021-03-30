/**
 * @file Creates and starts mysql DB connection. 
 * @author Mariko
 */

import { createConnection } from "mysql";
import { HOST, USER, PASSWORD, DB } from "../config/db.config.js";

// create a connection to the db 
// TODO do we need db.config given that we just use env vars? 
const connection = createConnection({
    host: HOST,
    user: USER,
    password: PASSWORD, 
    database: DB
})

// open mysql connection 
connection.connect(error => {
    if (error) throw error; 
    console.log("Successfully connected to database.")
})

export default connection 