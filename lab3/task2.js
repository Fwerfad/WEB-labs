// Реализуйте функцию sum
function Sum() {
    let call = (array) => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        return array.reduce(reducer)
    }
    return {
        call : call
    }
}
sum = new Sum()
console.log(sum.call([5, 5, 5, 5, 5, 5, 5, 5, 5]));
