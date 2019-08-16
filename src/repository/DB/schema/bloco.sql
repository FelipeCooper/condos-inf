-- Create a new table called 'blocos' in schema 'CondosAPI'
-- Drop the table if it already exists
IF OBJECT_ID('CondosAPI.blocos', 'U') IS NOT NULL
DROP TABLE CondosAPI.blocos
GO
-- Create the table in the specified schema
CREATE TABLE CondosAPI.blocos
(
    id INT NOT NULL PRIMARY KEY,
    -- primary key column
    number_of_units INT(50) NOT NULL,
    number_of_garages INT(50) NOT NULL,
    number_of_Hobbybox INT(50),
    id_condominium INT (50) NOT NULL
    -- specify more columns here
);
GO