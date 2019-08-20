const queries = require("./DB/queries/AddressQueries");
const dbConnection = require("./DB/config/Connection");

module.exports = {
    async save(address) {
        let con = await dbConnection();
        try {
            await con.query("START TRANSACTION");
            let result = await con.query(queries.insert_address, [
                address.values()
            ]);
            address.id = result.insertId;
            await con.query("COMMIT");
            return address;
        }
        catch (ex) {
            await con.query("ROLLBACK");
            console.log(ex);
            throw ex;
        }
        finally {
            await con.destroy();
            await con.release();
        }
    },
    //------//
    async update(address) {
        let con = await dbConnection();
        try {
            await con.query("START TRANSACTION");
            let result = await con.query(queries.update_address, [
                address.street,
                address.district,
                address.cep,
                address.city,
                address.id
            ])
            await con.query("COMMIT");
            return address;
        }
        catch (ex) {
            await con.query("ROLLBACK");
            console.log(ex);
            throw ex;
        }
        finally {
            await con.destroy();
            await con.release();
        }
    },
    //------//
    async read(id) {
        let con = await dbConnection();
        try {
            await con.query("START TRANSACTION");
            let result = await con.query(queries.read_address, [id]);
            await con.query("COMMIT");
            return result;
        }
        catch (ex) {
            await con.query("ROLLBACK");
            console.log(ex);
            throw ex;
        }
        finally {
            await con.destroy();
            await con.release();
        }
    },
    //------//
    async delete(id){
        let con = await dbConnection();
        try{
            await con.query("START TRANSACTION");
            await con.quer(queries.delete_address,[id]);
            await con.query("COMMIT");
            return true;
        }
        catch (ex){
            await con.query("ROLLBACK");
            console.log(ex)
            throw ex;
        }
        finally{
            await con.destroy();
            await con.release();
        }
    }
}
