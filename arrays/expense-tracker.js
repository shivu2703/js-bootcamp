const account ={
    name : 'Shivangi',
    expenses :[],
    addExpenses: function(description, amount){
        this.expenses.push({
            description : description,
            amount: amount
        })
    },
    getAccountSummary: function(){
        let totalexpenses=0 
        const total = this.expenses.forEach(function(expense){
            totalexpenses= totalexpenses+ expense.amount
        })
        return `${account.name} has ${totalexpenses} in expenses` 
    }
}

account.addExpenses('Rent',950)
account.addExpenses('coffee',2)
console.log(account)
console.log(account.getAccountSummary())

// const addExpenses = function(){

// }