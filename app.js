// one euro is:
let oneEuroIs = {
    JPY : 127.9, // japan yen
    USD : 1.2, // us dollar
    GBP : 0.8, // british pound
}

 const fromDollarToYen = (dollar) => {
   let yen = (dollar/ oneEuroIs.USD) * oneEuroIs.JPY;
    return yen;
 }
console.log(fromDollarToYen(100))
 
const fromEuroToDollar = (euro) => {
   let dollar = euro * oneEuroIs.USD;
    return dollar;

 }
console.log(fromEuroToDollar(75))
 
const fromYenToPound = (yen) => {
   let pound = (yen/oneEuroIs.JPY) * oneEuroIs.GBP;
    return pound;
 }
console.log(fromYenToPound(25))
 module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound}

 