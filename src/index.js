module.exports = function reverse (n) {
    return +String(Math.abs(n)).split('').reverse('').join('');
}   
// Math.abs returns the absolute value of the given number.
