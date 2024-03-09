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
    let arabic_numerals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    let roman_lookup = { 1000: "M", 900: "CM", 500: "D", 400: "CD", 100: "C", 90: "XC", 50: "L", 40: "XL", 10: "X", 9: "IX", 5: "V", 4: "IV", 1: "I" }

    let solution = [];

    for (let arabic_num of arabic_numerals) {
        let quotient = Math.floor(num / arabic_num);
        if (quotient > 0) {
            solution.push(roman_lookup[arabic_num].repeat(quotient));
            num -= quotient * arabic_num;
        }

    }

    return solution.join("");

}
console.log(convertToRoman(36));



function rot13(str) {
    let solution = [];
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let letter of str) {
        if (/[a-zA-Z]/.test(letter)) {
            let replacement_index = alphabet.indexOf(letter) - 13;
            solution.push(alphabet.at(replacement_index));
        } else {
            solution.push(letter);
        }
    }
    return solution.join("");
}
console.log(rot13("SERR CVMMN!"));
