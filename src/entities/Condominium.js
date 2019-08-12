const Condominium = class Condominium {
    constructor(name, cnpj, addres, id) {
        this.id = id;
        this.name = name;
        this.cnpj = cnpj;
        this.addres = addres;
    }
    setName(name) {
        this.name = name;
    }
    setCnpj(cnpj) {
        this.cnpj = cnpj;
    }
    setAddres(addres) {
        this.addres = addres;
    }
    getName() {
        return this.name;
    }
    getCnpj() {
        return this.cnpj;
    }
    getAddres() {
        return this.addres;
    }
    getID() {
        return this.id;
    }
}

module.exports = Condominium;