const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js')

// let oneEuroIs = {
//     JPY : 127.9, // japan yen
//     USD : 1.2, // us dollar
//     GBP : 0.8, // british pound

test("One euro should be 1.206 dollars", function () {
    // use the function like its suppoed to be used
    const dollar = fromEuroToDollar(3.5)

   
    const expected = 3.5 * 1.2;

    // this is the comparison for the unit test
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One euro should be 1.206 dollars", function () {
    // use the function like its suppoed to be used
    const yen = fromDollarToYen(100)

    const expected = 100/1.2 * 127.9;

    // this is the comparison for the unit test
    expect(yen).toBe(expected);
})

test("One euro should be 1.206 dollars", function () {
    // use the function like its suppoed to be used
    const pound = fromYenToPound(25)
    const expected = 25/127.9 * 0.8;

    // this is the comparison for the unit test
    expect(pound).toBe(expected);
})
