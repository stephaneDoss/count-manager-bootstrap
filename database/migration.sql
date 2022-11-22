CREATE DATABASE IF NOT EXISTS my_database_name;
USE my_database_name;

CREATE TABLE task (
 id bigint UNSIGNED NOT NULL,
 title VARCHAR(255) NOT NULL,
 begin VARCHAR(255) NOT NULL,
 end VARCHAR(255) NOT NULL,
 status VARCHAR(255) NOT NULL);

INSERT INTO task
 (id, title, begin, end, status)
VALUES
 (1, "task 1", "2020-01-01 20:30:00", "2020-04-10 21:30:00", "not started"),
 (2, "task 2", NOW(), "2020-04-07 23:42:00","in progress");