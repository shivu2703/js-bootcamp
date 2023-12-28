let myAccount = {
    name: 'Shivangi',
    expenses: 0,
    income: 0
}

let addExpense = function(account, amount){
    account.expenses= account.expenses+ amount
}

addExpense(myAccount,2.50)
console.log(myAccount)

//object ki property ko modify kr skte hai function me ya bahar bhi 
//agr object ko initialize kr diya to new object create ho jata hai wo same object ko refer nhi krta