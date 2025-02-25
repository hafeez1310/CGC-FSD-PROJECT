account = [];

class BankAccount{
    constructor(accountNumber, balance) {
        this.accountNumber = `IN${accountNumber}`;
        this.balance = balance;
    };

    deposit(amount) {
        this.balance+=amount
    }


}

let accountholder1 = new BankAccount(9381398490, 1500)

console.log(accountholder1.deposit(5000))