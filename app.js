// one euro is:
// let oneEuroIs = {
//     "JPY": 127.9, // japan yen
//     "USD": 1.2, // us dollar
//     "GBP": 0.8, // british pound
// }

 const fromDollarToYen = (dollar) => {
   let yen = (dollar/1.2) * 127.9;
    return yen;
 }

 const fromEuroToDollar = (euro) => {
   let dollar = euro * 1.2;
    return dollar;

 }

 const fromYenToPound = (yen) => {
   let pound = (yen/127.9) * 0.8;
    return pound;
 }

 module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound}

 