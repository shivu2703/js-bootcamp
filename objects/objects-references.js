//object ki property ko modify kr skte hai function me ya bahar bhi 
//agr object ko initialize kr diya to new object create ho jata hai wo same object ko refer nhi krta

let myAccount = {
    name: 'Shivangi',
    expenses: 0,
    income: 0
}

let addExpense = function(account, amount){
    account.expenses= account.expenses+ amount
}

let addIncome = function(account,amount){
    account.income=  account.income + amount
}

let resetAccount = function(account){
    account.expenses=0
    account.income=0
}

let getAccountSummary = function(account){
    let restAmount = account.income - account.expenses

    console.log(`Account for ${account.name} has ${restAmount}. ${account.income} in income. ${account.expenses} in expenses.`)
}

addIncome(myAccount,1000)
addExpense(myAccount,100)
addExpense(myAccount,200)
getAccountSummary(myAccount)
resetAccount(myAccount)
getAccountSummary(myAccount)