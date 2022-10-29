let num = 479;
let sum = 0;
while (num > 0) {
    let rem = num %10;
    sum += rem;
    num = parseInt(num / 10);
}
console.log(sum);
