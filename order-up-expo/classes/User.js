class User{
    constructor(name,lastName, email, phoneNumber, orders, customers, products){
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.orders = orders;
        this.customers = customers;
        this.products = products;
    }
}

export {User}