function palindrome(str) {
    str = str.toLowerCase();
    str = str.replace(/[^a-zA-Z0-9]/g, "");

    const tmpArr = [];
    for (let char of str) {
        tmpArr.unshift(char);
    }
    const reversed = tmpArr.join('');

    return str == reversed;
}
console.log(palindrome("_eye"));



function telephoneCheck(str) {
    // ^ for start, ()? for optional parts, \d{3} for exactly 3 digits, $ for end
    return /^(1|1 )?(\d{3}|\(\d{3}\))(-| )?\d{3}(-| )?\d{4}$/.test(str);
}
console.log(telephoneCheck("1 (555) 555-5555"));



function convertToRoman(num) {
    const roman_lookup = new Map([
        [1000, "M"],
        [900, "CM"],
        [500, "D"],
        [400, "CD"],
        [100, "C"],
        [90, "XC"],
        [50, "L"],
        [40, "XL"],
        [10, "X"],
        [9, "IX"],
        [5, "V"],
        [4, "IV"],
        [1, "I"],
      ]);

    let solution = [];

    for (let arabic_num of roman_lookup.keys()) {
        let quotient = Math.floor(num / arabic_num);
        if (quotient > 0) {
            solution.push(roman_lookup.get(arabic_num).repeat(quotient));
            num -= quotient * arabic_num;
        }
    }

    return solution.join("");
}
console.log(convertToRoman(36));



// limited to uppercase
function rot13(str) {
    let solution = [];
    // lookup object probably better than calculating
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let letter of str) {
        //if (/[A-Z]/.test(letter)) {
        if (alphabet.includes(letter)) {
            let replacement_index = alphabet.indexOf(letter) - 13;
            solution.push(alphabet.at(replacement_index));
        } else {
            solution.push(letter);
        }
    }
    return solution.join("");
}
console.log(rot13("SERR CVMMN!"));



function checkCashRegister(price, cash, cid) {
    let currencyValues = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.1,
        "QUARTER": 0.25,
        "ONE": 1,
        "FIVE": 5,
        "TEN": 10,
        "TWENTY": 20,
        "ONE HUNDRED": 100
    }

    let changeDue = cash - price;
    changeDue = Number(changeDue.toFixed(2));

    let registerTotal = Number(cid.reduce((sum, element) => sum + element[1], 0).toFixed(2));

    if (registerTotal < changeDue) {
        // done. register can't possibly make change
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else if (changeDue == registerTotal) {
        // done. empty the register and return it
        return { status: "CLOSED", change: cid };

    } else {
        let changeArray = [];
        // must start at largest denominations and go backwards
        // example below will fail the other direction
        //for (let i = 0; i < cid.length; i++) {
        for (let i = cid.length - 1; i >= 0; i--) {

            let denominationInRegister = cid[i][0];
            let denominationInRegisterTotalValue = cid[i][1];
            let denominationValue = currencyValues[denominationInRegister];

            let denominationChangeToReturn = 0;

            while (changeDue >= denominationValue && denominationInRegisterTotalValue > 0) {
                changeDue -= denominationValue;
                changeDue = Number(changeDue.toFixed(2));

                denominationChangeToReturn += denominationValue;
                denominationChangeToReturn = Number(denominationChangeToReturn.toFixed(2));

                denominationInRegisterTotalValue -= denominationValue;
                denominationInRegisterTotalValue = Number(denominationInRegisterTotalValue.toFixed(2));
            }

            // changeArray only includes entries when returning a denomination in change unless register closed
            if (denominationChangeToReturn > 0) {
                changeArray.push([denominationInRegister, denominationChangeToReturn]);
            }
        }

        if (changeDue > 0) {
            // couldn't make exact change based on what's in register
            return { status: "INSUFFICIENT_FUNDS", change: [] };
        } else {
            return { status: "OPEN", change: changeArray };
        }

    }
}
console.log(checkCashRegister(19.45, 20, [["PENNY", 0.54], ["NICKEL", 0.05], ["DIME", 0.0], ["QUARTER", 0.0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
