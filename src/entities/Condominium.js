const Condominium = class Condominium {
    constructor(name, cnpj, idAddress, idConstructionCompany, numberCondominium, id) {
        this.name = name;
        this.cnpj = cnpj;
        this.idAddress = idAddress;
        this.idConstructionCompany = idConstructionCompany;
        this.numberCondominium = numberCondominium;
        this.id = id;
    }
    //
    values() {
        return (Array(this.name, this.cnpj, this.idAddress, this.idConstructionCompany, this.numberCondominium))
    }
    //
}

module.exports = Condominium;
