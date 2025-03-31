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
    }
}

//Creating a new customer using the constructor.
const customer1 = new Customer("John Doe", "johndoe@gmail.com")

//Adding purchases.
customer1.addPurchase(100.75)
customer1.addPurchase(30.25)

//Getting the total spent.
customer1.getTotalSpent()
