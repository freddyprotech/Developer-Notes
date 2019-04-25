function calcPI(iterations) {
    let pi = 0;
    let divisor = 1;

    for(i = 0; i <= iterations; i++) {
        pi = pi + (4/divisor) - (4/(divisor+2));
        divisor = divisor + 4;
        //divisor += 4;
    }
    document.getElementById('output1').value = pi.toFixed(10);
}

let fibList = [];
function getFibList(howMany) {
    for(i = 0; i < howMany; i++) {
        fibList[i] = fib(i);
    }
    fibList.shift();
    document.getElementById('output1').value = fibList.join(", ");
}

function fib(whichNum) {
    let num1 = 1, num2 = 0, temp, i = 0;
    while(i < whichNum) {
        temp = num1;
        num1 = num1 + num2;
        num2 = temp;
        i++;
    }
    return num2;
}