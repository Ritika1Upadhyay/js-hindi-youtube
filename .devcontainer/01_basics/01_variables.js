const accountId = 144553
let accountEmail = "abc@gmail.com"
var accountPassword = "12345"
accountCity = "Varanasi"
let accountState;

// accountId = 2 not allowed in const
accountEmail = "hchchc@gmail.com"
accountPassword = "121221"
accountCity = "Jaipur"


console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

