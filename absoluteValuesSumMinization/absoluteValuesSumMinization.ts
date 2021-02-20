function absoluteValuesSumMinimization(a: number[]): number {
    let min = Infinity;
    let min_a = 0;
    for (let _a of a) {
        let _min = 0;
        for(let _b of a) {
            _min  += Math.abs(_b - _a);
        }
        if (_min < min) {
            min = _min;
            min_a = _a;
        }
    }
    return min_a
}
console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));