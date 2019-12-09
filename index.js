
module.exports.add = (a, b) => {
    return a + b;
}

module.exports.multiply = (a, b) => {
    return a * b;
}

module.exports.subract = (a, b) => {
    return ((a) - (b));
}

module.exports.divide = (a, b) => {
    if (b === 0) return `Division by ${b} not supported.`;
    let result = {};
    result.quotient = a / b;
    result.reminder = a % b;
    return result;
}
