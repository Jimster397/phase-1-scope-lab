// Write your solution in this file!
var customerName = "bob"
upperCaseCustomerName = () => {
    customerName = customerName.toUpperCase();
return customerName;
}
var bestCustomer;
setBestCustomer = () => {
    bestCustomer = "not bob"
    return bestCustomer;
}
overwriteBestCustomer = () => {
    bestCustomer = "maybe bob";
    return bestCustomer;
}
const leastFavoriteCustomer = "James"
changeLeastFavoriteCustomer = () => {
    leastFavoriteCustomer = "Lisa"
    return leastFavoriteCustomer;
}  
