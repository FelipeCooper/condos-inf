-- Create a new table called 'condominium' in schema 'CondosAPI'
-- Drop the table if it already exists
IF OBJECT_ID('CondosAPI.condominium', 'U') IS NOT NULL
DROP TABLE CondosAPI.condominium
GO
-- Create the table in the specified schema
CREATE TABLE CondosAPI.condominium
(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    -- primary key column
    name VARCHAR(100) NOT NULL,
    cnpj INT(20) NOT NULL,
    id_construction_company int(50),
    number_condominium int(50) NOT NULL,
    id_address int(50) NOT NULL,
    -- specify more columns here
);
GO