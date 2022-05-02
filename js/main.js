function removeSmallest(numbers) {
    let num = Math.min(...numbers);
    return numbers.filter( (x,i) => i !== numbers.indexOf(num) )
}