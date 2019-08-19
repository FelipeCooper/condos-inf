const BlocosRepository = require("../repository/BlocosRepository");
const Blocos = require("../entities/Blocos");


const BlocosServices = {
    async save(idCondominium, NumberOfUnits, NumberOfGarages, NumberOfHobbyBox) {
        let bloco = new Blocos(idCondominium, NumberOfUnits, NumberOfGarages, NumberOfHobbyBox);
        let saved = await BlocosRepository.save(bloco);
        return saved;
    },
    async show(idCondominium) {
        let blocos = await BlocosRepository.read(idCondominium);
        return blocos;
    },
    async update(NumberOfUnits, NumberOfGarages, NumberOfHobbyBox, id) {
        let updateBloco = new Blocos(null, NumberOfUnits, NumberOfGarages, NumberOfHobbyBox, id);
        return (await BlocosRepository.update(updateBloco));
    },
    async delete(id) {
        return (await BlocosRepository.delete(id));
    }

}

module.exports = BlocosServices;