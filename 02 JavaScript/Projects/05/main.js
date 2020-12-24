/*
JavaScript Algorithms and Data Structures Projects: Cash Register
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]
*/
const BILLSCOINS = {
    "ONE HUNDRED": {
        value: 100,
        count: 0,
        name: "ONE HUNDRED"
    },
    "TWENTY": {
        value: 20,
        count: 0,
        name: "TWENTY"
    },
    "TEN": {
        value: 10,
        count: 0,
        name: "TEN"
    },
    "FIVE": {
        value: 5,
        count: 0,
        name: "FIVE"
    },
    "ONE": {
        value: 1,
        count: 0,
        name: "ONE"
    },
    "QUARTER": {
        value: 0.25,
        count: 0,
        name: "QUARTER"
    },
    "DIME": {
        value: 0.10,
        count: 0,
        name: "DIME"
    },
    "NICKLE": {
        value: 0.05,
        count: 0,
        name: "NICKLE"
    },
    "PENNY": {
        value: 0.01,
        count: 0,
        name: "PENNY"
    }
}

function checkCashRegister(price, cash, cid) {
    var changeAmmount = cash - price;
    // get the total ammoun of money
    let status;
    let final;
    let change = [];
    let result = {
        status: '',
        change: [],
    }
    let totalMoney = 100 * cid.reduce((acc, curr) => acc += curr[1], 0) / 100;
    console.log(totalMoney)


    if (changeAmmount > totalMoney) {
        return {
            status: "INSUFFICIENT_FUNDS",
            change: []
        };
    }
    if (changeAmmount === totalMoney) {
        return {
            status: "CLOSED",
            change: cid
        };
    }

    let changeArray = '';


    // loop through each element to fill the cashier
    for (let currency in BILLSCOINS) {
        cid.forEach(element => {
            if (element[0] === currency) {
                BILLSCOINS[currency]['count'] = element[1] / BILLSCOINS[currency]['value'];
            }
        });
    }
    console.log(BILLSCOINS)

    //CHANGE ARRAY
    let rest = changeAmmount;
    for (let currency in BILLSCOINS) {
        let ammountInCurrency = BILLSCOINS[currency].value * BILLSCOINS[currency].count;
        console.log('currency: ' + currency + ' rest: ' + rest + 'ammount in currency' +
            ammountInCurrency)
        if (rest > BILLSCOINS[currency].value) {
            let numCurr = parseInt(rest / BILLSCOINS[currency].value);
            numCurr = numCurr < BILLSCOINS[currency].count ? numCurr : BILLSCOINS[currency].count;
            let tempArr = [
                BILLSCOINS[currency].name, BILLSCOINS[currency].value * numCurr
            ];
            change.push(tempArr);
            rest -= ((numCurr * BILLSCOINS[currency].value));
            rest = Math.round(rest * 100) / 100;

        }
    }
    if (rest > 0) {
        return {
            status: "INSUFFICIENT_FUNDS",
            change: []
        };
    } else {
        return {
            status: "OPEN",
            change: change
        };
    }
    console.log(change)

    return {
        status: "OPEN",
        change
    }











    return calculateAll(cid);
}

function calculateAll(cid) {
    return
}

console.log(checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
])); // {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.