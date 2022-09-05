DROP DATABASE IF EXISTS party_up;
CREATE DATABASE party_up; 

\c party_up; 

CREATE TABLE gamers (
    id SERIAL PRIMARY KEY,
    gamertag TEXT NOT NULL,
    pronouns TEXT,
    tagline TEXT,
    game TEXT NOT NULL,
    rank TEXT,
    role TEXT,
    age INT,
    image TEXT,
    country TEXT,
    about TEXT,
    socialmediaone TEXT,
    socialmediatwo TEXT,
    socialmediathree TEXT,
    status BOOLEAN
);