const accountId = 144553
let accountEmail = "shrawan@google.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "212121"
accountCity = "bengaluru"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/*
prefer not to use var 
because of issue in block scope & function scope
*/
