const BlocosRepository = require("../repository/BlocosRepository");
const Blocos = require("../entities/Blocos");


const BlocosServices = {
    async save(idCondominium, NumberOfUnits, NumberOfGarages, NumberOfHobbyBox){
        let bloco = new Blocos(idCondominium,NumberOfUnits,NumberOfGarages,NumberOfHobbyBox);
        let saved = await BlocosRepository.save(bloco);
        return saved;
    }
}

module.exports = BlocosServices;