const dbConnection = require('./DB/config/Connection');
const queries = require('./DB/queries/CondominiumQueries');

module.exports = class CondominiumRepository {

    async save(Condominium) {
        let con = await dbConnection();
        try {
            await con.query("START TRANSACTION");
            let savedCondominium = await con.query(queries.insert_condominiun,[
                Condominium.getName(),
                Condominium.getCnpj(),
                Condominium.getAddres()]);
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
            await con.query(queries.updateCondominium[
                Condominium.getName(),
                Condominium.getCnpj(),
                Condominium.getAddres()]);
            await con.query("COMMIT");
            return true;
        }catch (ex) {
            await con.query("ROLLBACK");
            console.log(ex);
            throw ex;
          } finally {
            await con.release();
            await con.destroy();
          }
        }

    //    
}
