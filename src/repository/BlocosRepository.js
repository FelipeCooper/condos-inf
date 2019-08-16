const dbConnection = require('./DB/config/Connection');
const queries = require('./DB/queries/BlocosQueries');


module.exports = {
    async save(bloco) {
        let con = await dbConnection();
        try {
            await con.query("START TRANSACTION");
            console.log(bloco);
            let savedBloco = await con.query(queries.insert_blocos, [bloco.values()]);
            await con.query("COMMIT");
            bloco.id = savedBloco.insertId;
            return bloco;
        }
        catch (ex) {
            await con.query("ROLLBACK");
            console.log(ex);
            throw ex;
        }
        finally {
            await con.release();
            await con.destroy();
        }
    },
    //---//

    async read() {
        let con = await dbConnection();
        try {
            await con.query('START TRANSACTION');
            let blocos = await con.query(queries.read_blocos);
            await con.query("COMMIT");
            return blocos;
        }
        catch (ex) {
            await con.query("ROLLBACK");
            console.log(ex);
            throw ex;
        }
        finally {
            await con.release();
            await con.destroy();
        }
    },
    //-----//
    async readID(id) {
        let con = await dbConnection();
        try {
            await con.query("START TRANSACTION");
            let bloco = await con.query(queries.readID_blocos, [id]);
            await con.query("COMMIT");
            return bloco;
        }
        catch (ex) {
            await con.query("ROLLBACK");
            console.log(ex);
            throw ex;
        }
        finally {
            await con.release();
            await con.destroy();
        }
    },
    //-----//
    async update(bloco) {
        let con = await dbConnection();
        try {
            await con.query("START TRANSACTION");
            let updateBloco = await con.query(queries.update_blocos, [
                bloco.values(),
                bloco.id
            ]);
            await query("COMMIT");
            return updateBloco;
        }
        catch (ex) {
            await con.query("ROLLBACK");
            console.log(ex);
            throw ex;
        }
        finally {
            await con.release();
            await con.destroy();
        }
    },
    //------//
    async delete(id) {
        let con = await dbConnection();
        try {
            await con.query("START TRANSACTION");
            await con.query(queries.delete_blocos, [id]);
            await con.query("COMMIT");
            return true;
        }
        catch (ex) {
            await con.query("ROLLBACK");
            console.log(ex);
            throw ex;
        }
        finally {
            await con.release();
            await con.destroy();
        }
    }
}