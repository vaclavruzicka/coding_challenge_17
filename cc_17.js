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

        //Using push to add the purchase to the purchase history array.
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

//Task 3 - Create a VIPCustomer Class

//Creating a VIP Customer class given a name, email,and VIP level.
class VIPCustomer extends Customer {
    constructor (name, email, vipLevel) {
        super(name, email)
        this.vipLevel = vipLevel

        //Console logging the creation of a VIP customer.
        console.log(`New VIP Customer Created: Name: ${this.name}, Email: ${this.email}, VIP Status: ${this.vipLevel} `)
    }

    //Overriding the original getTotalSpent() method so that a bonus can be added.
    getTotalSpent() {
        const baseTotal = super.getTotalSpent() //Calling the original method.
        const bonusTotal = baseTotal * 1.1 //Adding a 10% loyalty bonus.
        console.log(`VIP Customer ${this.name}'s total spent with bonus: $${bonusTotal.toFixed(2)}`)
        return bonusTotal
    }
}


//Creating a new customer using the constructor.
const vipCustomer1 = new VIPCustomer("Bob Vance", "bobvance@vancerefrigeration.com", "Gold")

//Adding purchases to the VIP Customer.
vipCustomer1.addPurchase(350.50)
vipCustomer1.addPurchase(250.75)

//Getting the total spent by the VIP Customer.
vipCustomer1.getTotalSpent()

//Task 4 - Build a Client Report System


//Creating a function that will generate a client report given a certain sales rep.
function getClientReport(salesRep) {

    //Adds up the total revenue generated from a sales rep's client list using reduce.
    const totalRevenue = salesRep.clients.reduce((sum, client) => sum + client.getTotalSpent(), 0)
    console.log(`Total Revenue from all clients: $${totalRevenue.toFixed(2)}`)

    //Uses fiter and map to make a secondary array to sort and display only client that have spent over $500.
    const bigSpenders = salesRep.clients.filter(client => client.getTotalSpent() > 500)
    console.log(`Clients that have spent over $500:`, bigSpenders.map(client => client.name))

    //Uses map in order to display the name and total spent by each client on the sales rep's client list.
    //It does this by creating new objects with properties of name and total spent, which get filled by the clients values.
    const customerSummary = salesRep.clients.map(client => ({ name: client.name, totalSpent: client.getTotalSpent().toFixed(2)}))
    console.log(`Customer Summary:`, customerSummary)
}

//Creating a new VIP customer.
const vipCustomer2 = new VIPCustomer("Josh Jacobs", "joshjacobs@gmail.com", "Gold")

//Adding a purchase.
vipCustomer2.addPurchase(300)

//Adding the two VIP customers to sales rep's client array.
salesRep1.addClient(vipCustomer1)
salesRep1.addClient(vipCustomer2)

//Getting a client report.
getClientReport(salesRep1)