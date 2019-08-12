module.exports = {
    insert_condominium: `INSERT INTO condominium(name, cnpj, addres) VALUES(?, ?)`,
    read_condominium: `SELECT * FROM condominium`,
    update_condominium: `UPDATE condominium SET condominium.name = ?, condominium.cnpj = ?, condominium.addres = ? WHERE condominium.id = ?`,
    delete_condominium: `DELETE FROM condominium WHERE condominium.id = ?`
}