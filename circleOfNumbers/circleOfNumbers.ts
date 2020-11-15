function circleOfNumbers(n: number, fn: number): number {
    let _hf = Math.floor(n/2);
    return fn+_hf;
}

console.log(circleOfNumbers(10, 2));