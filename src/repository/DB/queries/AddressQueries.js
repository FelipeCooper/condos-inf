module.exports = {
    insert_address: `INSERT INTO address (street, district, cep, city) VALUES(?)`,
    read_address:   `SELECT * FROM address WHERE address.id = ?`,
    update_address: `UPDATE address SET address.street  = ?, address.district  = ?, address.cep = ?, address.city = ? WHERE address.id = ?`,
    delete_address: `DELETE FROM address WHERE address.id = ?`
}