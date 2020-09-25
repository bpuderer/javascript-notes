let attendance = 14;

// === compares value and type. strict equality
// "1" == 1 -> true
// "1" === 1 -> false
if (attendance < 14) {
    console.log("have room");
} else if (attendance === 14) {
    console.log("at full capacity");
} else {
    console.log("over capacity");
}


if ((true || false) && (!false || true)) {
    console.log("condition is true")
}
