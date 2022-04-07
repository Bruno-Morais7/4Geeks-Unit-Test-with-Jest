// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}
// just a console log for ourselves.
//console.log(sum(7,3))
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    //return the dollar value
    return valueInDollar;
}
const fromEuroToYen = function(valueInEuro){
    // convert the given valueInEuro to Yen
    let valueInYen = valueInEuro * oneEuroIs.JPY;
    //return the Yen value
    return valueInYen;
}
const fromEuroToPound = function(valueInEuro){
    // convert the given valueInEuro to pound
    let valueInPound = valueInEuro * oneEuroIs.GBP;
    //return the pound value
    return valueInPound;
}
const fromDollarToYen = function(valueInDollar) {
    let valueInEuro = valueInDollar / 1.2
    let valueInYen = fromEuroToYen(valueInEuro)
    let valueInYenFixed = valueInYen.toFixed(1)
    return Number(valueInYenFixed);
}
//console.log(fromDollarToYen(1.2)) //Value of 1€ in Dollars to Yen
//console.log(1*127.9) //Value of 3,5€ in Yen
const fromYenToPound = function(valueInYen) {
    let valueInEuro = valueInYen / 127.9; 
    let valueInPound = fromEuroToPound(valueInEuro); 
    let valuInPoundFixed = valueInPound.toFixed(4);
    return Number(valuInPoundFixed);
}
//console.log(fromYenToPound(127.9)) //Value of 1€ in Yen to Pound
//console.log(1*0.8) //Value of 1€ in pound
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }

//console.log(fromYenToPound(1)) //Value of 1Yen to Pound
//console.log((1/127.9)*0.8) //Value of 1Yen in pound