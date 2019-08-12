const repository = require('../repository/CondominiumRepository');
const Condominium = require('../entities/Condominium');
const CondominiumRepository = new repository()

const CondominiumService = {
    async add(name, cnpj, addres){
        const CondominiumADD= new Condominium(name,cnpj,addres);
        let result = await CondominiumRepository.save(CondominiumADD);
        console.log(result)
        return (result)
    },
    async delete(id){
        const result = await CondominiumRepository.delete(id);
        console.log(result);
        return(result)
    },
    async update(name,cnpj,addres){
        const CondominiumNEW = new Condominium(name,cnpj,addres);
        const result = await CondominiumRepository.update(CondominiumNEW);
        console.log(result);
        return (result);
    },
    async read(){
        return (await CondominiumRepository.read());
    },
    async readID(id){
        return (await CondominiumRepository.readID(id));
    }
    
}
module.exports = CondominiumService;