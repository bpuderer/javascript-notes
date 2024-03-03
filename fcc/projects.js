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
