function addTwoDigits(n: number): number {
    // var a = n%10;
    // var b = (n-(a))/10;
    // return a+b;

    var a = n.toString();
    var b = a.split('');
    var c = 0;
    b.forEach(ele => {
        c += parseInt(ele);
    })
    return c;
}

console.log(addTwoDigits(2938932));