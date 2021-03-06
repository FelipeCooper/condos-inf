const dbConnection = require('./DB/config/Connection');
const queries = require('./DB/queries/CondominiumQueries');

module.exports = class CondominiumRepository {

    async save(Condominium) {
        let con = await dbConnection();
        try {
            await con.query("START TRANSACTION");
            let savedCondominium = await con.query(queries.insert_condominium, [
                Condominium.values()
            ]);
            await con.query("COMMIT");
            Condominium.id = savedCondominium.insertId;
            return Condominium;
        } catch (ex) {
            await con.query("ROLLBACK");
            console.log(ex);
            throw ex;
        } finally {
            await con.release();
            await con.destroy();
        }
    }
    async update(Condominium) {
        let con = await dbConnection();
        try {
            await con.query('START TRANSACTION');
            await con.query(queries.update_condominium,[
                Condominium.name,
                Condominium.cnpj,
                Condominium.numberCondominium,
                Condominium.id
            ]);
            await con.query("COMMIT");
            return true;
        } catch (ex) {
            await con.query("ROLLBACK");
            console.log(ex);
            throw ex;
        } finally {
            await con.release();
            await con.destroy();
        }
    }
    async read() {
        let con = await dbConnection();
        try {
            await con.query("START TRANSACTION");
            let Condominium = await con.query(queries.read_condominium);
            await con.query("COMMIT");
            Condominium = JSON.parse(JSON.stringify(Condominium));
            return Condominium;
        } catch (ex) {
            console.log(ex);
            throw ex;
        } finally {
            await con.release();
            await con.destroy();
        }
    }
    async readID(id) {
        let con = await dbConnection();
        try {
            await con.query("START TRANSACTION");
            let Condominium = await con.query(queries.readID_condominium, [id]);
            await con.query("COMMIT");
            Condominium = JSON.parse(JSON.stringify(Condominium));
            return Condominium;
        } catch (ex) {
            console.log(ex);
            throw ex;
        } finally {
            await con.release();
            await con.destroy();
        }
    }
    async delete(id) {
        let con = await dbConnection();
        try {
            await con.query("START TRANSACTION");
            await con.query(queries.delete_condominium, [id]);
            await con.query("COMMIT");
            return true;
        } catch (ex) {
            console.log(ex);
            throw ex;
        } finally {
            await con.release();
            await con.destroy();
        }

    }
    //   
}
