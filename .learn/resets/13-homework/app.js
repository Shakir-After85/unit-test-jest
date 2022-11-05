// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

 const fromDollarToYen = (yen) => {
    return (yen) * (127.9 / 1.2)
 }

 const fromEuroToDollar = (euro) => {
    return (euro) * 1.2;

 }

 const fromYenToPound = (pound) => {
    return (pound) * (0.8 * 127.9);
 }

 module.exports = {sum, fromEuroToDollar}
 module.exports = {sum, fromDollarToYen}
 module.exports = {sum, fromYenToPound}
