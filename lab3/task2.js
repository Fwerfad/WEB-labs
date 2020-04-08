// Реализуйте функцию sum
function sum(array) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return this.reduce(reducer)
}
console.log(sum.call([5, 5, 5, 5, 5, 5, 5, 5, 5]));
