const Address = class Address {
    constructor(street, district, cep, city, id) {
        this.district = district;
        this.street = street;
        this.cep = cep;
        this.city = city;
        this.id = id;
    }
    //--//
    values() {
        return (Array(this.street, this.district, this.cep, this.city));
    }
}

module.exports = Address;