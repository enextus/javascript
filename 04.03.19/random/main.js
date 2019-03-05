function getCoefficient() {
    var coefficient = Math.random();
    return coefficient;
}

function getAdditionalSessionDate() {
    var date = null;
    var coefficient = getCoefficient();
    if ( coefficient >= 0.5) {
        date = 23;
    } else {
        date = 16;
    }
    return date;
}

var dateSession = getAdditionalSessionDate();
console.log(dateSession);