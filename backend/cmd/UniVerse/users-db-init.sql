CREATE SCHEMA auth;
CREATE TABLE auth.users (
                            id SERIAL PRIMARY KEY,
                            username VARCHAR(50) UNIQUE NOT NULL,
                            email VARCHAR(100) UNIQUE NOT NULL,
                            password TEXT NOT NULL
);