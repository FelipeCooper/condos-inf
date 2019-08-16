const repository = require('../repository/CondominiumRepository');
const Condominium = require('../entities/Condominium');
const CondominiumRepository = new repository()

const CondominiumService = {
    async add(name, cnpj, addres,cep, city, constructionCompany, NumberCondominium, numberOfUnits, bloco, numberOfBlocos, NumberOfGarage,NumberOfHb,NumberOfShop,NumberOfEmployee){
        const CondominiumADD= new Condominium(name, cnpj, addres,cep, city, constructionCompany, NumberCondominium, numberOfUnits, bloco, numberOfBlocos, NumberOfGarage,NumberOfHb,NumberOfShop,NumberOfEmployee);
        let result = await CondominiumRepository.save(CondominiumADD);
        return (result)
    },
    async delete(id){
        const result = await CondominiumRepository.delete(id);
        return(result)
    },
    async update(name, cnpj, addres,cep, city, constructionCompany, NumberCondominium, numberOfUnits, bloco, numberOfBlocos, NumberOfGarage,NumberOfHb,NumberOfShop,NumberOfEmployee,id){
        const CondominiumNEW = new Condominium(name, cnpj, addres,cep, city, constructionCompany, NumberCondominium, numberOfUnits, bloco, numberOfBlocos, NumberOfGarage,NumberOfHb,NumberOfShop,NumberOfEmployee,id);
        await CondominiumRepository.update(CondominiumNEW);
        return (CondominiumNEW);
    },
    async read(){
        return (await CondominiumRepository.read());
    },
    async readID(id){
        return (await CondominiumRepository.readID(id));
    }
    
}
module.exports = CondominiumService;