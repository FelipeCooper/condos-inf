-- Create a new table called 'condominium' in schema 'CondosAPI'
-- Drop the table if it already exists
IF OBJECT_ID('CondosAPI.condominium', 'U') IS NOT NULL
DROP TABLE CondosAPI.condominium
GO
-- Create the table in the specified schema
CREATE TABLE CondosAPI.condominium
(
    id INT NOT NULL PRIMARY KEY,
    -- primary key column
    name VARCHAR(100) NOT NULL,
    cnpj INT(20) NOT NULL,
    addres VARCHAR(150) NOT NULL,
    cep VARCHAR(50) NOT NULL,
    city VARCHAR(50) NOT NULL,
    construction_company VARCHAR(100),
    number_condominium int(50) NOT NULL,
    number_of_units int(20),
    bloco VARCHAR(5),
    number_of_blocos int(20),
    number_of_garage int(20),
    number_of_hb int(20),
    number_of_shop int(20),
    number_of_employee int(10)
    -- specify more columns here
);
GO