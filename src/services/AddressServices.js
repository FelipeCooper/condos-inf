const AddressRepository = require("../repository/AddressRepository");
const Address = require('../entities/Address');

const AddresServices = {
    async save(street, district, cep, city) {
        let address = new Address(street, district, cep, city);
        let result = await AddressRepository.save(address);
        return result;
    },
    async read(id) {
        let result = await AddressRepository.read(id);
        return result;
    },
    async update(street, district, cep, city, id) {
        let address = new Address(street, district, cep, city, id);
        let result = await AddressRepository.update(address);
        return result;
    },
    async delete(id) {
        let result = await AddressRepository.delete(id);
        return result;
    }
}


module.exports = AddresServices;