module.exports = {
    insert_condominium: `INSERT INTO condominium
        (
         name,
         cnpj,
         addres,
         cep,
         city,
         construction_company,
         number_condominium,
         number_of_units,
         bloco,
         number_of_blocos,
         number_of_garage,
         number_of_hb,
         number_of_shop,
         number_of_employee)
     VALUES(?)`,
    read_condominium: `SELECT * FROM condominium`,
    readID_condominium: `SELECT * FROM condominium WHERE condominium.id = ?`,
    update_condominium: `UPDATE condominium SET 
    condominium.cnpj = ?,
    condominium.addres = ?,
    condominium.cep = ?,
    condominium.city = ?,
    condominium.construction_company = ?,
    condominium.number_condominium = ?,
    condominium.number_of_units = ?,
    condominium.bloco = ?,
    condominium.number_of_blocos = ?,
    condominium.number_of_garage = ?,
    condominium.number_of_hb = ?,
    condominium.number_of_shop = ?,
    condominium.number_of_employee = ?
    WHERE condominium.id = ?`,
    delete_condominium: `DELETE FROM condominium WHERE condominium.id = ?`
}