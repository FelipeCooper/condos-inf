-- Create a new table called 'address' in schema 'CondosAPI'
-- Drop the table if it already exists
IF OBJECT_ID('CondosAPI.address', 'U') IS NOT NULL
DROP TABLE CondosAPI.address
GO
-- Create the table in the specified schema
CREATE TABLE CondosAPI.address
(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
    -- primary key column
    street varchar(150) NOT NULL,
    city varchar(100) NOT NULL,
    district varchar(150) NOT NULL,
    cep INT(20) NOT NULL,
    -- specify more columns here
);
GO