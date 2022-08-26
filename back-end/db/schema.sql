DROP DATABASE IF EXISTS party_up;
CREATE DATABASE party_up; 

\c party_up; 

CREATE TABLE gamers (
    id SERIAL PRIMARY KEY,
    gamerTag TEXT NOT NULL,
    pronouns TEXT,
    game TEXT NOT NULL,
    rank TEXT,
    age INT,
    image TEXT,
    country TEXT,
    about TEXT,
    socialMediaOne TEXT,
    socialMediaTwo TEXT,
    socialMediaThree TEXT,
    status BOOLEAN NOT NULL
);