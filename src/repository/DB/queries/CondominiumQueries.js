module.exports = {
    insert_condominium: `INSERT INTO condominium
        (
         name,
         cnpj,
         id_construction_company,
         number_condominium,
         id_address
         )
     VALUES(?)`,
    read_condominium: `SELECT * FROM condominium`,
    readID_condominium: `SELECT * FROM condominium WHERE condominium.id = ?`,
    update_condominium: `UPDATE condominium SET condominium.name = ?, condominium.cnpj = ?, condominium.number_condominium = ? WHERE condominium.id = ?`,
    delete_condominium: `DELETE FROM condominium WHERE condominium.id = ?`
}