module.exports = {
    insert_blocos: `INSERT INTO blocos (id_condominium, number_of_units, number_of_garages, number_of_hobbybox) VALUES(?)`,
    read_blocos:   `SELECT * FROM blocos WHERE blocos.id_condominium = ?`,
    update_blocos: `UPDATE blocos SET blocos.number_of_units  = ?, blocos.number_of_garages  = ?, blocos.number_of_hobbybox = ? WHERE blocos.id = ?`,
    delete_blocos: `DELETE FROM blocos WHERE blocos.id = ?`
}