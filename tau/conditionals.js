let attendance = 14;

// === compares value and type. strict equality
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
