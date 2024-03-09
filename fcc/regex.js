// test method - returns boolean if match found
let myString = "Hello hello yell hElLo yellow, mellow yell fell World!";
let myRegex = /Hello|hello/;
console.log(myRegex.test(myString));

// match - extracts the match
myRegex = /hello/ig;   // i for ignore case, g for global search (all matches not just first)
console.log(myString.match(myRegex));

// . wildcard char
console.log(myString.match(/.ello/ig));

// single chars
console.log(myString.match(/[ym]ello/ig));

// range.  and [] for character set. this works too [h-s2-6]
console.log(myString.match(/[h-y]ello/ig));

// ^ negater when inside character set
console.log(myString.match(/[^aeiouhl]/ig));

// + when appears one or more times
console.log(myString.match(/l+ow/ig));

// * zero or more times
console.log(myString.match(/ello*/g));

// ? lazy match.  not greedy
console.log("zzzabczzztzzztzzzt".match(/abc.*?t/g));

// ^ outside character set for beginning of string match
console.log(myString.match(/^hello/ig));

// $ for end of string
console.log("Hello hello HELLO".match(/hello$/i));

// \w = [A-Za-z0-9_]
console.log(myString.match(/\w/g));

// \W = [^A-Za-z0-9_]
console.log(myString.match(/\W/g));

// \d = [0-9]  \D = [^0-9]
console.log("12 Monkeys".match(/\d/g));
console.log("12 Monkeys".match(/\D/g));

// | or

// \s whitespace = [\r\t\f\n\v]
// \S non-whitespace
console.log(myString.match(/\s/g));


// {} {lower,upper} quantity specifiers
console.log("Hey heyyy! heyyyyy! heyyyy!".match(/hey{4}!/g));   // exactly 4
console.log("Hey heyyy! heyyyyy! heyyyy!".match(/hey{3,4}!/g)); // 3 or 4
console.log("Hey heyyy! heyyyyy! heyyyy!".match(/hey{4,}!/g));  // 4 or more


// ? possible existence. 0 or 1 of preceding element   (!!!!!)
console.log("favourite".match(/favou?rite/g));
console.log("favorite".match(/favou?rite/g));


// positive lookaheads  (?=)
// look to make sure the element in the search pattern is there, but won't actually match it
// negative lookahead  (?!)
// look to make sure the element in the search pattern is not there.
// lookaheads useful to search for multiple patterns over the same string.

// e.g. 6 or more alphanumeric, 2 or more consecutive digits
myRegex = /(?=\w{6,})(?=\D*\d{2})/;
console.log(myRegex.test("abc49z"));
console.log(myRegex.test("abc4z8"));
console.log(myRegex.test("abczzz"));


// () for groups of characters
myRegex = /(sub|gate)way/;
console.log("---")
console.log(myRegex.test("leeway"));
console.log(myRegex.test("gateway"));


// () for capture group.  reference with \1
// e.g. starts with same word repeated 3x
myRegex = /^(\w+) \1 \1/;    // access capture group within same regex
console.log("---")
console.log(myRegex.test("hey hey hey it's"));
console.log(myRegex.test("row row row your"));
console.log(myRegex.test("hey hey my my"));

// capture groups to replace
myRegex = /^(\w+) (\w+) (\w+)$/;
console.log("one two three".replace(myRegex, "$3 $2 $1"));

// strip whitespace at beginning and end
myRegex = /^\s+|\s+$/g;
console.log("    abc 123  xyz  !!?!?  ".replace(myRegex, ""));

