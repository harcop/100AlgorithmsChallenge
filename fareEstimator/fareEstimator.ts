function fareEstimator(rt: number, rd: number, cpm: number[], cpm2: number[]): number[] {
    let _f = [];
    for (let i = 0; i< cpm.length; i++) {
        let _a = Math.floor(rt * cpm[i] + rd * cpm2[i]);
        _f.push(_a);
    }
    return _f;
}

console.log(fareEstimator(30, 7, [0.2, 0.35, 0.4, 0.45], [1.1, 1.8, 2.3, 3.5]));
