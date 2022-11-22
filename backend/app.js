"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");

// Constants
const PORT = process.env.PORT || 8080;
const HOST = "0.0.0.0";

// App
const app = express();

// Make sure you place body-parser before your CRUD handlers!
app.use(bodyParser.urlencoded({ extended: true }));

/*------------------------------------------
--------------------------------------------
Database Connection
--------------------------------------------
--------------------------------------------*/
const conn = mysql.createConnection({
  host: process.env.DBHOST,
  port: process.env.DBPORT,
  user: process.env.DBUSER /* MySQL User */,
  password: process.env.DBPASSWORD /* MySQL Password */,
  database: process.env.DB /* MySQL Database */,
});

/*------------------------------------------
--------------------------------------------
Shows Mysql Connect
--------------------------------------------
--------------------------------------------*/
conn.connect((err) => {
  if (err) throw err;
  console.log("Mysql Connected with App...");
});

/**
 * Get All Items
 *
 * @return response()
 */
app.get("/api/tasks", (req, res) => {
  let sqlQuery = "SELECT * FROM task";
  let query = conn.query(sqlQuery, (err, results) => {
    if (err) throw err;
    res.send(apiResponse(results));
  });
});

/**
 * Get Single Item
 *
 * @return response()
 */
app.get("/api/tasks/:id", (req, res) => {
  let sqlQuery = "SELECT * FROM task WHERE id=" + req.params.id;

  let query = conn.query(sqlQuery, (err, results) => {
    if (err) throw err;
    res.send(apiResponse(results));
  });
});

/**
 * Create New Item
 *
 * @return response()
 */
app.post("/api/tasks", (req, res) => {
  let data = {
    title: req.body.title,
    task: req.body.task,
    begin: req.body.begin,
    end: req.body.end,
    status: req.body.status,
  };

  let sqlQuery = "INSERT INTO items SET ?";

  let query = conn.query(sqlQuery, data, (err, results) => {
    if (err) throw err;
    res.send(apiResponse(results));
  });
});

/**
 * Update Item
 *
 * @return response()
 */
app.put("/api/tasks/:id", (req, res) => {
  let sqlQuery =
    "UPDATE task SET title='" +
    req.body.title +
    "', task='" +
    req.body.task +
    "', begin='" +
    req.body.begin +
    "', end='" +
    req.body.end +
    "', status='" +
    req.body.status +
    "' WHERE id=" +
    req.params.id;

  let query = conn.query(sqlQuery, (err, results) => {
    if (err) throw err;
    res.send(apiResponse(results));
  });
});

/**
 * Delete Item
 *
 * @return response()
 */
app.delete("/api/tasks/:id", (req, res) => {
  let sqlQuery = "DELETE FROM task WHERE id=" + req.params.id + "";

  let query = conn.query(sqlQuery, (err, results) => {
    if (err) throw err;
    res.send(apiResponse(results));
  });
});

/**
 * API Response
 *
 * @return response()
 */
function apiResponse(results) {
  return JSON.stringify({ status: 200, error: null, response: results });
}

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
