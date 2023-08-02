module.exports = function reverse(n) {
    let result = Number(Math.abs(n).toString().split("").reverse().join(""));
    return result;
}
