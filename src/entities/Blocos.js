const Blocos = class Blocos {
    constructor(idCondominium, NumberOfUnits, NumberOfGarages, NumberOfHobbyBox, id) {
        this.NumberOfGarages = NumberOfGarages;
        this.NumberOfUnits = NumberOfUnits;
        this.idCondominium = idCondominium;
        this.NumberOfHobbyBox = NumberOfHobbyBox;
        this.id = id;
    }
    values(){
        return(Array(this.idCondominium, this.NumberOfUnits, this.NumberOfGarages, this.NumberOfHobbyBox))
    }
}

module.exports = Blocos;

