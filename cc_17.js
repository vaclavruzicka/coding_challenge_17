//Task 1 - Create a Customer Class

//Creating a class constructor to build a customer given a name and email.
class Customer {
    constructor (name, email) {
        this.name = name //Sources name in the instance.
        this.email = email //Sources email in the instance.
        this.purchaseHistory = [] //Sets up an empty array for purchase history.

        //Console logs the creation of a new customer with their name and email.
        console.log(`New Customer Created - Name: ${this.name}, Email: ${this.email}`)
    }

    //Creating a function that adds a purchase to a customer purchase history array.
    addPurchase(amount) {

        //Using push to add the purachse to the purchase history array.
        this.purchaseHistory.push(amount)
    }

    //Creating a function that adds up the purchase history array using reduce.
    getTotalSpent() {
        const totalSpent = this.purchaseHistory.reduce((sum, amount) => sum + amount, 0)
        console.log(`${this.name} has spent a total of $${totalSpent.toFixed(2)}`)
        return totalSpent
    }
}

//Creating a new customer using the constructor.
const customer1 = new Customer("John Doe", "johndoe@gmail.com")

//Adding purchases.
customer1.addPurchase(100.75)
customer1.addPurchase(30.25)

//Getting the total spent.
customer1.getTotalSpent()

//Task 2 - Create a SalesRep Class

//Creating a new class SalesRep given a name.
class SalesRep {
    constructor (name) {
        this.name = name //Sources name in the instance.
        this.clients = [] //Sets up an empty array for the sales rep's clients.
    }
    
    //Creating a method that adds a customer to a sales rep's client array using push and then console logs it.
    addClient(customer) {
        this.clients.push(customer)
        console.log(`Client added - Name: ${customer.name}`)
    }

    //Calculates the clients total purchases.
    getClientTotal(name) {

        //Searches the client list for a string that is strictly equal to the name input into the function.
        const client = this.clients.find(client => client.name === name)
        if (client) {
            
            //If the client name is found it calls get total spent.
            const totalPurchased = client.getTotalSpent()
            console.log(`Total spent by ${name}: $${totalPurchased.toFixed(2)}`)

            //If the client name is not found, the function returns, 'Client not found'.
        } else {
            console.log(`Client not found.`)
        }
    }
}

//Creating a new sales rep using the constructor.
const salesRep1 = new SalesRep("Jane Smith")

//Adding the existing customer to the sales rep's client list.
salesRep1.addClient(customer1)

//Getting the client total for the specified client.
salesRep1.getClientTotal("John Doe")