const Condominium = class Condominium {
    constructor(name, cnpj, addres, cep, city, constructionCompany, numberCondominium, numberOfUnits, bloco, numberOfBlocos,
        numberOfGarage, numberOfHb, numberOfShop, numberOfEmployee, id) {
        this.name = name;
        this.cnpj = cnpj;
        this.addres = addres;
        this.cep = cep;
        this.city = city;
        this.constructionCompany = constructionCompany;
        this.numberCondominium = numberCondominium;
        this.numberOfUnits = numberOfUnits;
        this.bloco = bloco;
        this.numberOfBlocos = numberOfBlocos;
        this.numberOfGarage = numberOfGarage;
        this.numberOfHb = numberOfHb;
        this.numberOfShop = numberOfShop;
        this.numberOfEmployee = numberOfEmployee;
        this.id = id;
    }
//
    values() {
        return (Array(this.name, this.cnpj, this.addres, this.cep, this.city, this.constructionCompany, this.numberCondominium,
            this.numberOfUnits, this.bloco, this.numberOfBlocos,
            this.numberOfGarage, this.numberOfHb, this.numberOfShop, this.numberOfEmployee))
    }
//
}

module.exports = Condominium;